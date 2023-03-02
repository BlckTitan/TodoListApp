import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSubmit = (props) => {
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(false)
    props.e.preventDefault()
    setIsPending(true)
    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(props.todoData)
    }).then(() => {
      setIsPending(false);
    })
    
    navigate('/')
  }