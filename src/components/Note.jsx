import React from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";



const Note = ({note}) => {
    return (
        <div className='note'>
            <p>{note.text}</p>
            <div className='note-footer'>
                <span style={{fontWeight: 'bold'}}>{note.date}</span>
                <RiDeleteBin2Fill className='delete-icon'/>
            </div>
        </div>
    );
}

export default Note;
