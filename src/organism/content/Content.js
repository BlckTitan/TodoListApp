import React from 'react'
import { Link } from "react-router-dom";
//icons
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
//global style
import  {GlobalStyle} from '../../globalStyles/GlobalStyles';
//style
import {Container} from './style/content.style'
export default function Content({RenderContent, title, btnTitle, linkTo}) {
  return (
    <Container>
      <GlobalStyle/>
        <div>
            <div className='header'>
              <h4>{title}</h4>
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
              {title === "All Todo's" &&
              <>
                <a href='/#'><span className='icon'><ArrowLeftIcon/></span></a>
                <a href='/#'><span className='icon'><ArrowRightIcon/></span></a>
              </>
              } 
            </div>
        </div>
    </Container>
  )
}
