process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'language':
                process.stdout.write('System language: ' + process.env.LANG + '\n');
                break;
            case 'version':
                process.stdout.write('Node version: ' + process.versions.node + '\n');
                break;
            case 'exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});