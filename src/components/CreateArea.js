import { Fab} from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


export default function CreateArea(props){

     const [isExpanded,setExpended] = useState(false)
    const [note, setNote] = useState({
        title:"",
        content:"",
}) 

    function handleChange(event){
        console.log(event.target)
        const {name, value} = event.target;
        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            }
        })
    }
  
     function submitNote(e){
        props.onAdd(note)
        setNote({
            title:"",
            content:"",
        });
        e.preventDefault()

     }

     function expand(){
        setExpended(true)
     }
    return(
        <div>
            <form  className="create-note">
                {isExpanded && (
                <input type="text" name="title" placeholder="title"  onChange={handleChange} value={note.title}/>


                )}
                <textarea name="content"  rows={isExpanded ? 3 :1} onClick={expand} onChange={handleChange} value={note.content} placeholder="text a note....." />            
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
                </form>
        </div>
    )
}