//custom hook
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchAllQuery from '../../utilities/FetchAllQuery';
//style
import {Form} from './style/ContentForm.style';
//icons
//import DoneIcon from '@mui/icons-material/Done';
//import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

export default function ContentForm() {

    const {id} = useParams()
    const navigate = useNavigate();
    const {data: todoDetail, isLoading, error} = useFetchAllQuery(`http://localhost:5000/blogs/`+id);
    const [title, setUpdateTitle] = useState('');
    const [description, setUpdateDescription] = useState('');
    const [timestamp, setTimestamp] = useState(null);
    const [completed, setCompleted] = useState('');
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
      todoDetail && setUpdateTitle(todoDetail.title)
      todoDetail && setUpdateDescription(todoDetail.description)
      setCompleted(false);
      setTimestamp(new Date());
    }, [todoDetail]);

    const updateTodo = (e) => {
      e.preventDefault();
      const todoData = {title, timestamp, description, completed};

      fetch('http://localhost:5000/blogs/'+id, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(todoData)
      }).then(()=>{
        setIsPending(false)
      });
      navigate('/');
    }

  return (
    <>
    {error && <div className='errorMessage'>{error}</div>}
    {isLoading && <div className='loadingMessage'>LOADING</div>}
      <Form>
        <input 
            type="text" 
            placeholder="Title your todo" 
            required
            maxLength={200}
            value={title}
            onChange={(e) => {
              setUpdateTitle(e.target.value);        
            }}
        />
        <textarea 
          placeholder="first thing about development is nothing about development"
          value={description}
          onChange={(e) => setUpdateDescription(e.target.value)}
        >
        </textarea>
        <button onClick={(e)=>{updateTodo(e)}}>Update Todo</button>
      </Form>
    </>
  )
}