const chalk=require('chalk');
const validator = require('validator');
const yargs=require('yargs');
const note=require('./notes.js')

//yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder:{
        title:{
                describe: 'Note Title!',
                demandOption: true,
                type: 'string'
        },
        body:{
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        note.addNote(argv.title,argv.body)
        
    }

})

yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder:{
        title:{
            describe: 'Note Title!',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        note.removeNote(argv.title)
    }

})

yargs.command({
    command:'list',
    describe:'List all notes',
    handler(){
        note.listNotes();
    }

})

yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe: 'Note Title!',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
       note.readNotes(argv.title);
    }

})



yargs.parse();
//console.log(yargs.argv);
