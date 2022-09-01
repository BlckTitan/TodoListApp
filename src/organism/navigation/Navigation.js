import React from 'react'
//styled components
import Styled from 'styled-components';
//material icon
import ListAltIcon from '@mui/icons-material/ListAlt';

const Nav = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1.5rem;
    width: 100%;
    background-color: #fff;
    height: 5rem;
    z-index: 999;
    & div{
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 600;
      color: #1B2F5D;
      .icon{
        font-size: 1.5rem;
        margin-right: 1rem;
      }
    }
`;

export default function Navigation() {
  return (
    <Nav>
        <div>
            <ListAltIcon className="icon" />
            <span>Todo List</span>
        </div>
    </Nav>
  )
}
