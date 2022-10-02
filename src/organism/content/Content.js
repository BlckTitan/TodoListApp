import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
//data fetch
import useFetchAllQuery from '../../utilities/FetchAllQuery';
//global style
import  {GlobalStyle} from '../../globalStyles/GlobalStyles';
//useContext
import { StateContext } from '../../utilities/SharedStates';
//style
import {Container} from './style/content.style';
//icons
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Content({RenderContent, pageTitle, btnTitle, linkTo}) {
  const [itemOffset, setItemOffset] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;
  //navigation
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(true);
  const {blogId, blogStatus, blogTitle, currentItems, setCurrentItems} = useContext(StateContext);
  const {data} = useFetchAllQuery('http://localhost:5000/blogs');
   
  useEffect(()=>{
      const endOffSet = itemOffset + itemsPerPage;
      data && setCurrentItems(data.slice(itemOffset, endOffSet));
      data && setPageCount(Math.ceil(data.length/itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (e) =>{
      const newOffset = (e.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
  }
  const handleDelete = (e) =>{
    e.preventDefault();
    window.confirm('Are your sure?');
    
    blogId &&
    
    fetch('http://localhost:5000/blogs/'+blogId, {
      method: 'DELETE',
    }).then(()=>{
      navigate('/');
    })
  }

  return (
    <Container>
      <GlobalStyle/>
        <div>
          
            <div className='header'>
              <h4>{pageTitle && pageTitle.toUpperCase()}</h4>
              {btnTitle !== "" &&
                <Link to={linkTo} className='link'>
                  <button>{btnTitle}</button>
                </Link>
              }
            </div>


            <div className='body'>
                {<RenderContent/>}
            </div>



            <div className='footer'>
              {(blogId !== "" && pageTitle !== "All Todo's" && pageTitle !== "Create Todo") && 
                <div className='blogAction'>
                  {blogStatus === 'false' &&
                    <span className='pending'>Pending Todo</span>
                  }
                  {blogStatus === 'true' &&
                    <span className='success'>Completed</span>
                  }
                  { (pageTitle !== "Update Todo") &&
                    <>
                      <Link to={`/update/${blogId}`} className='link'>Edit</Link>
                      <span className='danger delete' onClick={(e)=>{
                        handleDelete(e)
                      }}>Delete</span>
                    </>
                  }
                </div>
              }
              { 
                pageTitle === "All Todo's" &&
                <div className='pageNavigation'> 
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel={<ArrowRightIcon className='icon right'/>}
                    onPageChange={(e) => handlePageClick(e)}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<ArrowLeftIcon className='icon left'/>}
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName='page_num'
                    nextLinkClassName='page_num'
                    activeLinkClassName='active'
                  />
                </div>
              }
            </div>
        </div>
    </Container>
  )
}
