/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


const getLiveCoin = async() => {
  let x;
  await fetch(new Request("https://api.livecoinwatch.com/coins/list"), {
  method: "POST",
  headers: new Headers({
      "content-type": "application/json",
      "x-api-key": "88de5193-cf36-4423-9aa1-2556c5a13d21",
  }),
  body: JSON.stringify({
      currency: "USD",
      sort: "rank",
      order: "ascending",
      offset: 0,
      limit: 10,
      meta: false,
  })
  
  })
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
      x = data;
      console.log(data);
      return data;
  })
  return x;
}

app.get("/live", async(req, res) => {
  res.send(await getLiveCoin());
});

app.listen(3000, function() {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app