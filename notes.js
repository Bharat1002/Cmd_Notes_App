  const fs = require('fs');
  const chalk = require('chalk');

const getNotes = function(){
    return 'Your notes are...';
}

// adding note in json file
const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body 
         });
         saveNotes(notes);
         console.log(chalk.green.inverse('New Note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

// Removing note from json file
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if(notesToKeep.length === notes.length){
        console.log(chalk.red.inverse('No note found'));
    } else {
        console.log(chalk.green.inverse('Not removed'));
        saveNotes(notesToKeep);
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};