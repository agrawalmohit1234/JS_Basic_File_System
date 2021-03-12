let fs = require('fs')
module.exports = function (dirpath) {
    fs.readFile(dirpath, 'utf8', function (error, data) {
        if (error) {
            console.log('Enter a valid file path.')
        } else {
            console.log(data)
        }
    });
}