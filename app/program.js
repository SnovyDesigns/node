var readline = require('readline');
var OSinfo = require('../modules/OSinfo');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.on('line', function(line) {
    if (line !== '') {
        switch (line) {
            case '/exit':
                console.log('Quitting app!'); 
                return rl.close();
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                console.log('You wrote: ' + line);
                break;
        }
    } else {
        console.log('Please write something...'); 
    }
    rl.prompt();
});
