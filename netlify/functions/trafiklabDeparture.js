const fetch = require("node-fetch");

const API_ENDPOINT = `https://api.resrobot.se/v2.1/departureBoard?id=740021658&format=json&accessId=${process.env.TRAFIKLAB_API_KEY}`;

exports.handler = async function (event, context) {
  let response;
  try {
    response = await fetch(API_ENDPOINT);
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response,
    }),
  };
};
