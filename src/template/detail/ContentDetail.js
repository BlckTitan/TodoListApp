import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//styled component
import {DetailContainer} from './style/ContentDetail.Style';
//custom hook
import useFetchAllQuery from '../../utilities/FetchAllQuery';
import { StateContext } from '../../utilities/SharedStates';

export default function ContentDetail() {
  const {id} = useParams();
  const {data: todoDetail, isLoading, error} = useFetchAllQuery(`http://localhost:5000/blogs/`+id);
  const {
    blogId, setBlogId, 
    blogTitle, setBlogTitle, 
    blogStatus, setBlogStatus
  } = useContext(StateContext);
  
  useEffect(()=>{
    setBlogId(id);
    todoDetail && setBlogTitle(todoDetail.title);
    todoDetail && setBlogStatus(todoDetail.completed);
  }, [todoDetail]);

  
  return (
    <DetailContainer>
      {error && <div className='errorMessage'>{error}</div>}
      {isLoading && <div className='loadingMessage'>LOADING</div>}
      {todoDetail && 
      <div className='detail'>
        <div>
          {todoDetail.description}
        </div>
      </div>
      }
    </DetailContainer>
    
  )
}

/**
 *id && setBlogId(id)
  useEffect(()=>{
    todoDetail && setBlogTitle(todoDetail.title)
    todoDetail && setBlogStatus(todoDetail.completed)
  }, []); 
 */