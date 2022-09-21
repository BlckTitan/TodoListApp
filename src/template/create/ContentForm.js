import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//style
import {Form} from './style/ContentForm.style';

//icons
//import DoneIcon from '@mui/icons-material/Done';
//import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

export default function ContentForm() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [completed, setCompleted] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const todoData = {title, description, completed, timestamp}
    setIsPending(true)
    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(todoData)
    }).then(() => {
      setIsPending(false);
    })
    
    navigate('../')
  }
  return (
    <>
      <Form>
          <input 
              type="text" 
              placeholder="Title your todo" 
              required
              maxLength={200}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value); 
                setCompleted(false);
                setTimestamp(new Date())}}
          />
          <textarea 
            placeholder='first thing about development is nothing about development'
            value={description}
            onChange={(e) => {setDescription(e.target.value);}}
          >
          </textarea>
          {!isPending &&
            <button onClick={(e) => {
              handleSubmit(e); 
            }}>Create Todo</button>
          }
          {isPending &&
            <button onClick={ false} className="pending">Creating Todo</button>
          }
          
      </Form>
    </>
  )
}
