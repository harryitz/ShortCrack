const crx3 = require('crx3');
 
crx3(['../manifest.json'], {
    keyPath: '../example/example-extension.pem',
    crxPath: '../example/example-extension.crx',
    zipPath: '../example/example-extension.zip'
})
    .then(() => console.log('done'))
    .catch(console.error)
;