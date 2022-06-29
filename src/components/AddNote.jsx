import React from 'react';

const AddNote = ({notes, setNotes}) => {
    return (
        <div className='add-note'>
            <textarea placeholder='Add new note..' cols="10" rows="8"></textarea>

        </div>
    );
}

export default AddNote;
