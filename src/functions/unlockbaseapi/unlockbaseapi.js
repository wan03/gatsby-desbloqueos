/* eslint-disable */
// Defines the Unlockbase API procedures.
const UNLOCKBASE_API_KEY = process.env.UNLOCKBASE_API_KEY;
const UNLOCKBASE_API_DEBUG = true;
const UNLOCKBASE_API_URL = 'http://www.unlockbase.com/xml/api/v3';
const UNLOCKBASE_VARIABLE_ERROR = '_UnlockBaseError';
const UNLOCKBASE_VARIABLE_ARRAY = '_UnlockBaseArray';
const UNLOCKBASE_VARIABLE_POINTERS = '_UnlockBasePointers';
const { URLSearchParams } = require('url');
const fetch = require('node-fetch');

exports.handler = async function(event, context) {

let action = event; //somewhere in the event
// may not need to turn into url params. Using post works passing the Key and Action in the body.
let params = event.params; // somewhere in the event
async function CallAPI (UNLOCKBASE_API_URL) {
  
  const response = await fetch(UNLOCKBASE_API_URL, {
    method: 'POST',
    body: params
         
    });

    if (UNLOCKBASE_API_DEBUG && err) {
      return err
    } else {
      return parseXML(response)
    }

}

function parseXML (xml) {
  var X = {
    toObj: function(xml) {
       var o = {};
       if (xml.nodeType==1) {   // element node ..
          if (xml.attributes.length)   // element with attributes  ..
             for (var i=0; i<xml.attributes.length; i++)
                o["@"+xml.attributes[i].nodeName] = (xml.attributes[i].nodeValue||"").toString();
          if (xml.firstChild) { // element has child nodes ..
             var textChild=0, cdataChild=0, hasElementChild=false;
             for (var n=xml.firstChild; n; n=n.nextSibling) {
                if (n.nodeType==1) hasElementChild = true;
                else if (n.nodeType==3 && n.nodeValue.match(/[^ \f\n\r\t\v]/)) textChild++; // non-whitespace text
                else if (n.nodeType==4) cdataChild++; // cdata section node
             }
             if (hasElementChild) {
                if (textChild < 2 && cdataChild < 2) { // structured element with evtl. a single text or/and cdata node ..
                   X.removeWhite(xml);
                   for (var n=xml.firstChild; n; n=n.nextSibling) {
                      if (n.nodeType == 3)  // text node
                         o["#text"] = X.escape(n.nodeValue);
                      else if (n.nodeType == 4)  // cdata node
                         o["#cdata"] = X.escape(n.nodeValue);
                      else if (o[n.nodeName]) {  // multiple occurence of element ..
                         if (o[n.nodeName] instanceof Array)
                            o[n.nodeName][o[n.nodeName].length] = X.toObj(n);
                         else
                            o[n.nodeName] = [o[n.nodeName], X.toObj(n)];
                      }
                      else  // first occurence of element..
                         o[n.nodeName] = X.toObj(n);
                   }
                }
                else { // mixed content
                   if (!xml.attributes.length)
                      o = X.escape(X.innerXml(xml));
                   else
                      o["#text"] = X.escape(X.innerXml(xml));
                }
             }
             else if (textChild) { // pure text
                if (!xml.attributes.length)
                   o = X.escape(X.innerXml(xml));
                else
                   o["#text"] = X.escape(X.innerXml(xml));
             }
             else if (cdataChild) { // cdata
                if (cdataChild > 1)
                   o = X.escape(X.innerXml(xml));
                else
                   for (var n=xml.firstChild; n; n=n.nextSibling)
                      o["#cdata"] = X.escape(n.nodeValue);
             }
          }
          if (!xml.attributes.length && !xml.firstChild) o = null;
       }
       else if (xml.nodeType==9) { // document.node
          o = X.toObj(xml.documentElement);
       }
       else
          alert("unhandled node type: " + xml.nodeType);
       return o;
    },
    toJson: function(o, name, ind) {
       var json = name ? ("\""+name+"\"") : "";
       if (o instanceof Array) {
          for (var i=0,n=o.length; i<n; i++)
             o[i] = X.toJson(o[i], "", ind+"\t");
          json += (name?":[":"[") + (o.length > 1 ? ("\n"+ind+"\t"+o.join(",\n"+ind+"\t")+"\n"+ind) : o.join("")) + "]";
       }
       else if (o == null)
          json += (name&&":") + "null";
       else if (typeof(o) == "object") {
          var arr = [];
          for (var m in o)
             arr[arr.length] = X.toJson(o[m], m, ind+"\t");
          json += (name?":{":"{") + (arr.length > 1 ? ("\n"+ind+"\t"+arr.join(",\n"+ind+"\t")+"\n"+ind) : arr.join("")) + "}";
       }
       else if (typeof(o) == "string")
          json += (name&&":") + "\"" + o.toString() + "\"";
       else
          json += (name&&":") + o.toString();
       return json;
    },
    innerXml: function(node) {
       var s = ""
       if ("innerHTML" in node)
          s = node.innerHTML;
       else {
          var asXml = function(n) {
             var s = "";
             if (n.nodeType == 1) {
                s += "<" + n.nodeName;
                for (var i=0; i<n.attributes.length;i++)
                   s += " " + n.attributes[i].nodeName + "=\"" + (n.attributes[i].nodeValue||"").toString() + "\"";
                if (n.firstChild) {
                   s += ">";
                   for (var c=n.firstChild; c; c=c.nextSibling)
                      s += asXml(c);
                   s += "</"+n.nodeName+">";
                }
                else
                   s += "/>";
             }
             else if (n.nodeType == 3)
                s += n.nodeValue;
             else if (n.nodeType == 4)
                s += "<![CDATA[" + n.nodeValue + "]]>";
             return s;
          };
          for (var c=node.firstChild; c; c=c.nextSibling)
             s += asXml(c);
       }
       return s;
    },
    escape: function(txt) {
       return txt.replace(/[\\]/g, "\\\\")
                 .replace(/[\"]/g, '\\"')
                 .replace(/[\n]/g, '\\n')
                 .replace(/[\r]/g, '\\r');
    },
    removeWhite: function(e) {
       e.normalize();
       for (var n = e.firstChild; n; ) {
          if (n.nodeType == 3) {  // text node
             if (!n.nodeValue.match(/[^ \f\n\r\t\v]/)) { // pure whitespace text node
                var nxt = n.nextSibling;
                e.removeChild(n);
                n = nxt;
             }
             else
                n = n.nextSibling;
          }
          else if (n.nodeType == 1) {  // element node
             X.removeWhite(n);
             n = n.nextSibling;
          }
          else                      // any other node
             n = n.nextSibling;
       }
       return e;
    }
 };
 if (xml.nodeType == 9) // document node
    xml = xml.documentElement;
 var json = X.toJson(X.toObj(X.removeWhite(xml)), xml.nodeName, "\t");
 return "{\n" + tab + (tab ? json.replace(/\t/g, tab) : json.replace(/\t|\n/g, "")) + "\n}";
}

function checksumIMEI (code) {
  var len = code.length
  var parity = len % 2
  var sum = 0
  for (var i = len-1; i >= 0; i--) {
      var d = parseInt(code.charAt(i))
      if (i % 2 == parity) { d *= 2 }
      if (d > 9) { d -= 9 }
      sum += d
  }
  return sum % 10
}

function checkIMEI (IMEI){
  return checksumIMEI(IMEI) == 0
}


  // try {
  //   const response = await fetch("https://icanhazdadjoke.com", {
  //     headers: { Accept: "application/json" }
  //   });
  //   if (!response.ok) {
  //     // NOT res.status >= 200 && res.status < 300
  //     return { statusCode: response.status, body: response.statusText };
  //   }
  //   const data = await response.json();

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ msg: data.joke })
  //   };
  // } catch (err) {
  //   console.log(err); // output to netlify function log
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
  //   };
  // }
};
