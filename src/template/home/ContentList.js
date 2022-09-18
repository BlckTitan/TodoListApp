import React from 'react'
//import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
//import { QueryContext } from '../../utilities/DBquery';
//style
import {List, Items} from './style/ContentList.style';
//icons
import DeleteIcon from '@mui/icons-material/Delete';
import useFetchAllQuery from '../../utilities/FetchAllQuery';

export default function ContentList() {
    const {data, isLoading, error} = useFetchAllQuery('http://localhost:5000/blogs?_limit=6');
    
  return (
    <>
        <List>
           {error && <div className='errorMessage'>{error}</div>}
           {isLoading && <div className='loadingMessage'>LOADING</div>}
           {    
                data && data.map((todos) =>(
                    <Link to={`detail/${todos.id}`} key={todos.id}>
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