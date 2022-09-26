import React, {useContext} from 'react'
//organism
import Content from '../../organism/content/Content';
import ContentDetail from '../../template/detail/ContentDetail';
//context
import {StateContext} from '../../utilities/SharedStates';

export default function Detail() {
  const { blogTitle} = useContext(StateContext)

  return (
    <Content RenderContent={ContentDetail} pageTitle={blogTitle} btnTitle="Back" linkTo="../" />
  )
}