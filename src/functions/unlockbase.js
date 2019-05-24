// Defines the Unlockbase API procedures.
const UNLOCKBASE_API_KEY = process.env.UNLOCKBASE_API_KEY;
const UNLOCKBASE_API_DEBUG = true;
const UNLOCKBASE_API_URL = 'http://www.unlockbase.com/xml/api/v3';
const UNLOCKBASE_VARIABLE_ERROR = '_UnlockBaseError';
const UNLOCKBASE_VARIABLE_ARRAY = '_UnlockBaseArray';
const UNLOCKBASE_VARIABLE_POINTERS = '_UnlockBasePointers';

module.exports.handler = async (event, context, callback) => {

    async function CallAPI () {
        const response = await fetch(UNLOCKBASE_API_URL, {
            headers: CURLOPT_CONNECTTIMEOUT || 10,
            headers: CURLOPT_TIMEOUT || 30,
            headers: CURLOPT_HEADER || false,
            headers: CURLOPT_RETURNTRANSFER || true,
            headers: CURLOPT_ENCODING || '',
            headers: CURLOPT_POST || true,
            headers: CURLOPT_POSTFIELDS || UnlockBase.BuildQuery(),     
          });
      
          if (UNLOCKBASE_API_DEBUG && err) {
            return err
          } else {
            return response
          }
      
      }
      
    
}

