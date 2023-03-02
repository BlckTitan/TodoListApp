import { useState } from "react";
import { useNavigate } from "react-router-dom";
const useUpdateTodo = (props) => {
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();
    fetch('http://localhost:3000/blogs/'+props.id, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(props.todoData)
    }).then(()=>{
      setIsPending(false)
    });
    navigate('/');
  }