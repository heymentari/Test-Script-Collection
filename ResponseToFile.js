// The opts for the server, also includes the data to be written to file
let opts = {
    requestName: request.name || request.url,
    fileExtension: 'json',
    mode: 'writeFile', // Change this to any function of the fs library of node to use it.
    uniqueIdentifier: 'waddup',
    responseData: pm.response.text()
};

pm.sendRequest({
    url: 'http://localhost:3000/write',
    method: 'POST',
    header: 'Content-Type:application/json',
    body: {
        mode: 'raw',
        raw: JSON.stringify(opts)
    }
}, function (err, res) {
    console.log(res);
});