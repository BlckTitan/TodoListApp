import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
//useContext
import { StateContext } from '../../utilities/SharedStates';
//style
import {List, Items} from './style/ContentList.style';
//data fetch
import useFetchAllQuery from '../../utilities/FetchAllQuery';

export default function ContentList() {
    const { blogId, blogStatus, blogTitle, currentItems } = useContext(StateContext);
    const {isLoading, error} = useFetchAllQuery('http://localhost:5000/blogs');
    
    
  return (
    <>
        <List>
           {error && <div className='errorMessage'>{error}</div>}
           {isLoading && <div className='loadingMessage'>LOADING</div>}
           {    
                currentItems && currentItems.map((todos) =>(
                    <Link to={`detail/${todos.id}`} key={todos.id}>
                        <Items 
                            statusColor={(todos.completed === "true") ? '#00b894' : '#fdcb6e'}
                        >
                            <div className='bodyHeader'>
                            <div className="text">
                                <h3>{todos.title}</h3>
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