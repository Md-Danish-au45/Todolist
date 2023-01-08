import { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [notes, setNotes]  = useState([])

  function addNote(newNote){

    setNotes(prevNotes => {
        return [...prevNotes, newNote];
    });
    console.log(notes)
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem,index) =>{
        return index !== id; 
      })
    })
  }
  return (
    <div className="App">
      <Header /> 
      <CreateArea onAdd={addNote} />
      {
        notes.map((noteItem,index) => {
          return(
      <Note 
      
      key ={index}
      id = {index}
      title = {noteItem.title}
      content={noteItem.content}

      onDelete={deleteNote}      
      />



          )
        })
      }
      <Footer />

    </div>
  );
}

export default App;
