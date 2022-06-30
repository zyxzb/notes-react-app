import React,{useState} from 'react';
import {nanoid} from 'nanoid';
import { BsEraser } from "react-icons/bs";

const AddNote = ({notes, setNotes}) => {
    const [noteText, setnoteText] = useState('');
    const characteLimit = 200;

//add on ENTER CLICK

    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         handleSaveNote();
    //     }
    // }

    const handleClear = () => {
        setnoteText('')
    }
    
    const handleChange = (e) => {

        if (e.target.value.length < 201){

           setnoteText(e.target.value); 
        }
    }

    const handleSaveNote = () => {

        if (noteText.trim().length > 0) {setNotes([

            ...notes, {
                
                    text: noteText,
                    date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
                    id: nanoid(),            
            }
        ]);
        setnoteText('')
    } }

    return (
        <div className='add-note'>
            <textarea 
                placeholder='Add new note..' 
                cols="10" 
                rows="8"
                onChange={handleChange}
                value={noteText}
                // onKeyDown={handleKeyDown}
                >
            </textarea>
            <BsEraser className='clear'onClick={handleClear} />
            <div className="note-footer" >
                <span>
                    <b>{characteLimit - noteText.length} </b>
                    Characters left
                </span>
                <button onClick={handleSaveNote}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;
