import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
//icons
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
//global style
import  {GlobalStyle} from '../../globalStyles/GlobalStyles';
//useContext
import { StateContext } from '../../utilities/SharedStates';
//style
import {Container} from './style/content.style'
export default function Content({RenderContent, title, btnTitle, linkTo}) {
  const navigate = useNavigate();
  const {blogId, blogStatus} = useContext(StateContext);

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
              <h4>{title && title.toUpperCase()}</h4>
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
              {(blogId !== "" && title !== "All Todo's" && title !== "Create Todo") && 
                <div className='blogAction'>
                  {blogStatus === false &&
                    <form>
                      <label htmlfor="completed">
                        <input type="checkbox" id='completed'/>
                        <span className='pending'>Complete Todo</span>
                      </label>
                    </form>
                  }
                  {blogStatus === true &&
                    <span className='success'>Completed</span>
                  }
                  { (title !== "Update Todo") &&
                    <>
                      <Link to={`/update/${blogId}`} className='link'>Edit</Link>
                      <span className='danger delete' onClick={(e)=>{
                        handleDelete(e)
                      }}>Delete</span>
                    </>
                  }
                </div>
              }
              {title === "All Todo's" &&
                <div className='pageNavigation'>
                  <a href='/#'><span className='icon'><ArrowLeftIcon/></span></a>
                  <a href='/#'><span className='icon'><ArrowRightIcon/></span></a>
                </div>
              } 
            </div>
        </div>
    </Container>
  )
}
