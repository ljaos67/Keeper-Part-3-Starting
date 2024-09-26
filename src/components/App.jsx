import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function updateNotesArray(event, noteObject) {
    setNotesArray((prevItems) => {
      return [...prevItems, noteObject];
    });
    event.preventDefault();
  }
  function deleteNote(id) {
    setNotesArray((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={updateNotesArray} />
      {notesArray.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
