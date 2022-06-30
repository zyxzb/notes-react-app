import {nanoid} from 'nanoid';
import React, {useState} from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';

//styles
import './App.css';
import Header from './components/Header';

function App() {

    const [notes,
        setNotes] = useState([
        {
            text: 'Note 1',
            date: '28/06/2022',
            id: nanoid()
        }, {
            text: `${ "Note 2"}`,
            date: `${new Date().getDate() - 1}/${new Date().getMonth()}/${new Date().getFullYear()}`,
            id: nanoid()
        }, {
            text: 'Note 3',
            date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
            id: nanoid()
        }
    ]);

    const [searchText,
        setSearchText] = useState('');

    const [darkMode,
        setDarkMode] = useState(false);

    return (
        <div className={`${darkMode ? 'dark-mode content' : 'content'}`}>
            <div className="container">
                <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Search setSearchText={setSearchText}/>
                <NotesList
                    notes={notes.filter((el) => el.text.toLowerCase().includes(searchText))}
                    setNotes={setNotes}/>
            </div>
        </div>
    );
}

export default App;
