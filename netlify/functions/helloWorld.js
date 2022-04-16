exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello env variables: ${process.env.TEST}`,
    }),
  };
};
