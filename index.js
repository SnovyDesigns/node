var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');
var path = require('path');

// fs.stat('./cats.jpg', function(err, stats) {
//     var statMode = new StatMode();
//     console.log(statMode(stats));
// });

// fs.readFile('./text.txt', 'utf8', function(err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./text.txt', '\nA tak wyglądają po zapisie!', function(err) {
//         if (err) throw err; 
//         console.log('Zapisano!'.blue);
//         fs.readFile('./text.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie'.blue);
//             console.log(data);
//         });
//     });
// });

function listDirectory (dir, file) {
    fs.readdir(dir, function(err, files) {
        if (err) throw err;
    
        fs.writeFile(path.join(__dirname, file), 'Zawartość odczytanego katalogu:', function(err, data) {
            if (err) throw err;        
        });
    
        files.forEach(function(filename) {
            fs.appendFile(path.join(__dirname, file), '\n- ' + filename, function(err, data) {
                if (err) throw err; 
            });
        });
    
        console.log('Odczytano zawartość katalogu i zapisano do pliku readdir.txt'.blue);
    });
}

listDirectory('./', 'readdir.txt');
