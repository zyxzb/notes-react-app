import React from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";

const Note = ({note, notes, setNotes}) => {

    const handleDelete = () => {

        setNotes(notes.filter((el) => el.id !== note.id));

    }
    return (
        <div className='note'>
            <p>{note.text}</p>
            <div className='note-footer'>
                <span style={{fontWeight: 'bold'}}>{note.date}</span>
                <RiDeleteBin2Fill 
                className='delete-icon'
                onClick={handleDelete}
                />
            </div>
        </div>
    );
}

export default Note;
