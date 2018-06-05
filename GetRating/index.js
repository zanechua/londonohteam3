module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var documents = context.bindings.ratings;

    if (req.query.ratingId || (req.body && req.body.ratingId)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: documents[0]
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};