import {nanoid} from 'nanoid';
import React, {useState} from 'react';
import './App.css';
import NotesList from './components/NotesList';

function App() {

    const [notes, setNotes] = useState([
        {
            text: 'Note something 1',
            date: '29/06/2022',
            id: nanoid(),
        },
        {
            text: 'Note something 2',
            date: '29/06/2022',
            id: nanoid(),
        },
        {
            text: 'Note something 3',
            date: '29/06/2022',
            id: nanoid(),
        },
        {
            text: 'Note something 4',
            date: '29/06/2022',
            id: nanoid(),
        },
    ])

    return (
        <div className="container">
            <NotesList notes={notes} setNotes={setNotes}/>
        </div>
    );
}

export default App;
