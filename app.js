const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize yarg version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Node body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: function(){
        console.log('removing note!');
    }
});
// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('reading a note!');
    }
});
// Create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function(){
        console.log('listing all notes!');
    }
});


yargs.parse();
// console.log(yargs.argv);
