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
        currentItems, setCurrentItems
      }
    }>
        {props.children}
    </StateContext.Provider>
  )
}
/**
Joseph Owonwo

const context = () => {
    const [state, setState] = React.useState([]); // Item[]

    const deleteItem = () => {
        deleteRequest().then(() => {
            fetchAll().then((newItems) => setState(newItems))
        })
    }

    const updateItem = (id, data) => {
    
    };

    const addItem = (data) => {
    };

    return { items: state, deleteItem, updateItem, addItem }
}

const componetA = () => {
    // fetch many
    const { items } = useContext();
}

const componetB = () => {
const idParams = useParams();
  // fetch one
  const { items, deleteItem } = useContext(); // Item[]
  const item = items.find((item) => item.id === idParams);

  // deleteItem();
};
 */