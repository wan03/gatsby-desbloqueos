import React from 'react';

import Phone from './../../../Phone/Phone';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody,CardColumns } from 'reactstrap';
    var phones = [
        {
            name: "iphone",
            price: 200,
            img: "https://www.sprint.com/content/dam/sprint/commerce/devices/apple/apple_iphone_6s_plus/gray/new/devicenb_650x900.png/jcr:content/renditions/cq5dam.thumbnail.290.370.png"
        },
        {
            name: "andriod",
            price: 200,
            img: "https://www.sprint.com/content/dam/sprint/commerce/devices/apple/apple_iphone_6s_plus/silver/new/devicenb_650x900.png/jcr:content/renditions/cq5dam.thumbnail.290.370.png"
        },
        {
            name: "google",
            price: 200,
            img: "https://www.sprint.com/content/dam/sprint/commerce/devices/apple/apple_iphone_6s_plus/rose_gold/new/devicenb_650x900.png/jcr:content/renditions/cq5dam.thumbnail.290.370.png"
        },
        {
            name: "att",
            price: 200,
            img: "https://www.sprint.com/content/dam/sprint/commerce/devices/apple/apple_iphone_6s_plus/gold/new/devicenb_650x900.png/jcr:content/renditions/cq5dam.thumbnail.290.370.png"
        },
        {
            name: "iphone2",
            price: 200,
            img: "https://www.sprint.com/content/dam/sprint/commerce/devices/apple/apple_iphone_6s_plus/gray/new/devicenb_650x900.png/jcr:content/renditions/cq5dam.thumbnail.290.370.png"
        },
        {
            name: "andriod2",
            price: 200,
            img: "https://www.sprint.com/content/dam/sprint/commerce/devices/apple/apple_iphone_6s_plus/silver/new/devicenb_650x900.png/jcr:content/renditions/cq5dam.thumbnail.290.370.png"
        },
        {
            name: "google2",
            price: 200,
            img: "https://www.sprint.com/content/dam/sprint/commerce/devices/apple/apple_iphone_6s_plus/rose_gold/new/devicenb_650x900.png/jcr:content/renditions/cq5dam.thumbnail.290.370.png"
        },
        {
            name: "att2",
            price: 200,
            img: "https://www.sprint.com/content/dam/sprint/commerce/devices/apple/apple_iphone_6s_plus/gold/new/devicenb_650x900.png/jcr:content/renditions/cq5dam.thumbnail.290.370.png"
        }

    ]

   const PhoneResultsWrapper = (props) => {
     return (
         <div >
       <CardColumns>
            {
                phones.map(e => {
                    return <Phone  img={e.img} name={e.name} price={e.price}/>
                })
            }

       </CardColumns>
       </div>
     );
   };

   export default PhoneResultsWrapper;


