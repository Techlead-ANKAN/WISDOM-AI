import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import ScrollNavigator from "../src/components/ScrollNavigator";
import ScrollPage from './components/ScrollPage';

function App() {
  return (
    <Router>
      <ScrollNavigator />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ScrollPage />} />
          <Route path="about" element={<ScrollPage />} />
          <Route path="solutions" element={<ScrollPage />} />
          <Route path="contact" element={<ScrollPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App