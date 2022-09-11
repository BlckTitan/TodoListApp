import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//style
import {List, Items} from './style/ContentList.style';
//icons
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContentList() {
    const [todo, setTodo] = useState(null);
    const fetchData = async (resource) =>{
        
        await fetch(resource)
        .then((response)=>{
            if(response.status !== 200){
                return new Error('Could not fetch data')
            }else{
                return response.json();
            }
        }).then((data)=>{
            setTodo(data);
        }).catch((error)=>{console.log(error)});
    }
    useEffect(()=>{
        fetchData('http://localhost:5000/blogs?_limit=6');
    }, []);
  return (
    <>
        <List>
           {
                todo && todo.map((todos) =>(
                    <Link to={'detail?id='+todos.id} key={todos.id}>
                        <Items 
                            statusColor={(todos.completed) ? '#00b894' : '#fdcb6e'}
                        >
                            <div className='bodyHeader'>
                            <div className="text">
                                <h3>{todos.title}</h3>
                            </div>
                            <div className='action'>
                                <span className='icon danger'><DeleteIcon/></span>
                            </div>
                            </div>
                            <div className='bodyFooter'>
                            <span>{todos.timestamp}</span>
                            </div>
                        </Items>
                    </Link>
                ))
           }
        </List>    
    </>
  )
}