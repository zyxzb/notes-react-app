import React from 'react';
import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({notes, setNotes }) => {
    return (
        <div className='notes-list'>
            {notes.map( note => <Note note={note} key={note.id} notes={notes} setNotes={setNotes}/>)}
            <AddNote notes={notes} setNotes={setNotes}/>
        </div>
    );
}

export default NotesList;
