import React from 'react'

//icons
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
//style
import {Container} from './style/content.style'
export default function Content() {
  return (
    <Container>
        <div>
            <div className='header'>
                <button>Add Task</button>
            </div>
            <div className='body'>Content</div>
            <div className='footer'>
                <a href='#'><ArrowLeftIcon/></a>
                <a href='#'><ArrowRightIcon/></a>
            </div>
        </div>
    </Container>
  )
}
