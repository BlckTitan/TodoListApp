//custom hook
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchAllQuery from '../../utilities/FetchAllQuery';
//style
import {Form} from './style/ContentForm.style';

export default function ContentForm() {

    const {id} = useParams()
    const navigate = useNavigate();
    const {data: todoDetail, isLoading, error} = useFetchAllQuery(`http://localhost:5000/blogs/`+id);
    const [title, setUpdateTitle] = useState('');
    const [description, setUpdateDescription] = useState('');
    const [timestamp, setUpdateTimestamp] = useState(null);
    const [completed, setUpdateCompleted] = useState(null);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
      todoDetail && setUpdateTitle(todoDetail.title);
      todoDetail && setUpdateDescription(todoDetail.description);
      todoDetail && setUpdateCompleted(todoDetail.completed);
      setUpdateTimestamp(new Date());
    }, [todoDetail]);

    const updateTodo = (e) => {
      e.preventDefault();
      const todoData = {title, timestamp, description, completed};
      (completed !== null) &&
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
              setUpdateCompleted("false");
            }}
        />
        <textarea 
          placeholder="first thing about development is nothing about development"
          value={description}
          onChange={(e) => {
            setUpdateDescription(e.target.value);
            setUpdateCompleted("false");}
          }
        >
        </textarea>
        
        <label>Status
          <select 
              value={completed} 
              onChange={(e)=>{setUpdateCompleted(e.target.value)}
          }>
            <option value={true}>Complete</option>
            <option value={false}>Pending</option>
          </select>
        </label>
        <button onClick={(e)=>{updateTodo(e)}}>Update Todo</button>
      </Form>
    </>
  )
}