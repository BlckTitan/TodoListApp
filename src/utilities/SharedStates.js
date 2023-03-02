import React, {useState, createContext} from 'react';

export const StateContext = createContext();

export default function SharedStates(props) {
  const [blogId, setBlogId] = useState(null);
  const [blogTitle, setBlogTitle] = useState(null);
  const [blogDescription, setBlogDescription] = useState(null);
  const [blogTimestamp, setBlogTimestamp] = useState(null);
  const [blogStatus, setBlogStatus] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);

  return (
    <StateContext.Provider value={
      {
        blogId, setBlogId, 
        blogTitle, setBlogTitle, 
        blogStatus, setBlogStatus,
        currentItems, setCurrentItems,
        blogDescription, setBlogDescription,
        blogTimestamp, setBlogTimestamp
      }
    }>
        {props.children}
    </StateContext.Provider>
  )
}