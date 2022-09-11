import React from 'react'

//style
import {Form} from './style/ContentForm.style';

//icons
//import DoneIcon from '@mui/icons-material/Done';
//import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

export default function ContentForm() {
  return (
    <>
    <Form>
        <input 
            type="text" 
            placeholder="Finish the report on tourism development in Africa" 
            required
        />
        <textarea placeholder='first thing about development is nothing about development'></textarea>
        <button>Create Todo</button>
    </Form>
    </>
  )
}
