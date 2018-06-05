module.exports = function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  var documents = context.bindings.ratings;
  if (req.query.userId || (req.body && req.body.userId)) {
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: documents
    };
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a userId on the query string or in the request body'
    };
  }
  context.done();
};
