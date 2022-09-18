import React from 'react';
//organism
import Content from '../../organism/content/Content';
import ContentList from './ContentList';
export default function Home() {
  return (
    <>
      <Content 
        RenderContent={ContentList} title="All Todo's" btnTitle="Add Task" linkTo="create"
      />
    </>
    
  )
}