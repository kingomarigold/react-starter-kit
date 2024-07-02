import React, { Suspense } from 'react'
import {  Routes, Route } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import NotFound from './Routes.lazy'
import Home from '../components/home/Home'

const RoutePaths = () => (
  <>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/not-found" element={<NotFound />}  />
      </Routes>
    </Suspense>
  </>
)
export default RoutePaths
