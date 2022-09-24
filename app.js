const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

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
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});
// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});
// Create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler(){
        notes.listNotes();
    }
});


yargs.parse();
// console.log(yargs.argv);
