import * as http from 'http';

function makeRequest(options, requestData){
  const requestBody = JSON.stringify(requestData);
  let responseData = {};

  const req = http.request(options, (res) => {
    let data = '';

    console.log('Status Code:', res.statusCode);
    responseData.statusCode = res.statusCode

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Response Body: ', JSON.parse(data));
        responseData.body = JSON.parse(data);
        console.log("api response",responseData);
    });

  }).on("error", (err) => {
    console.log("Error: ", err.message);
  });

  // Write data to request body
  req.write(requestBody);
  //console.log("responses line 29",responseData);
  req.end();
  
  //return responseData;
}

export function saveDataApi(requestData) {

  const options = {
    hostname: 'myapi',
    port: '4000',
    path: `/`,
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
  }; 

  const response = makeRequest(options, requestData);
  //console.log("response from api", response);
}