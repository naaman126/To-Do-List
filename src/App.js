import React, { useState } from 'react';
import './App.css';
import Heading from './Components/Heading.jsx';
import Footer from './Components/Footer.jsx';
import Notes from './Components/Notes.jsx';
import CreateArea from './Components/CreateArea.jsx';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <CreateArea 
        onAdd={addNote}
      />
      {notes.map((noteItem, index) => {
        return <Notes 
        key={index}
        id={index}
        title={noteItem.title} 
        content={noteItem.content} 
        onDelete={deleteNote}/>;
      })}
      <Footer />
    </div>
  );
}

export default App;
