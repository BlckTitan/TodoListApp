import React from 'react'

//organism
import Content from '../../organism/content/Content';
import ContentForm from './ContentForm';

export default function Create() {
  return (
    <Content RenderContent={ContentForm} title="Create Todo" btnTitle="Back" linkTo="../"/>
  )
}
