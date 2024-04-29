import React, { Suspense } from 'react'
import {  Routes, Route } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import NotFound from './Routes.lazy'
import App from '../components/App'

const RoutePaths = () => (
  <>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<App />}  />
        <Route path="/not-found" element={<NotFound />}  />
      </Routes>
    </Suspense>
  </>
)
export default RoutePaths
