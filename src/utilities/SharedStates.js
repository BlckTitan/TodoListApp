import React, {useState, createContext} from 'react';

export const StateContext = createContext();

export default function SharedStates(props) {
  const [blogId, setBlogId] = useState(null);
  const [blogTitle, setBlogTitle] = useState(null);
  const [blogStatus, setBlogStatus] = useState(null);
  return (
    <StateContext.Provider value={
      {
        blogId, setBlogId, 
        blogTitle, setBlogTitle, 
        blogStatus, setBlogStatus,
      }
    }>
        {props.children}
    </StateContext.Provider>
  )
}
