//custom hook
import { useParams } from 'react-router-dom';
import useFetchAllQuery from '../../utilities/FetchAllQuery';
//style
import {Form} from './style/ContentForm.style';

//icons
//import DoneIcon from '@mui/icons-material/Done';
//import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

export default function ContentForm() {
  const {id} = useParams()
  const {data: todoDetail, isLoading, error} = useFetchAllQuery(`http://localhost:5000/blogs/`+id);
  return (
    <>
    {error && <div className='errorMessage'>{error}</div>}
    {isLoading && <div className='loadingMessage'>LOADING</div>}
    {todoDetail && 
      <Form>
          <input 
              type="text" 
              placeholder="Finish the report on tourism development in Africa" 
              required
              maxLength={200}
              value={todoDetail.title}
          />
          <textarea 
            placeholder='first thing about development is nothing about development'
            value={todoDetail.description}
          ></textarea>
          <button>Update Todo</button>
      </Form>
    }
    </>
  )
}
