import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from '../template/home/Home';
import Create from '../template/create/Create';
import Detail from '../template/detail/Detail';
import Update from '../template/update/Update';
import NoPage from '../template/noPage/NoPage';

export default function RouteEngine() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="detail" element={<Detail />} />
          <Route path="update" element={<Update />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
