import React from 'react'

//organism
import Content from '../../organism/content/Content';
import ContentDetail from '../../template/detail/ContentDetail';
export default function Detail() {
  return (
    <Content RenderContent={ContentDetail} title="This Todo" btnTitle="Back" linkTo="../"/>
  )
}
