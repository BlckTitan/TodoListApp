import React from 'react'
import Content from '../../organism/content/Content';
//component
import ContentForm from '../update/ContentForm';

export default function Update() {
  return (
    <Content RenderContent={ContentForm} pageTitle="Update Todo" btnTitle="Back" linkTo="../"/>
  )
}
