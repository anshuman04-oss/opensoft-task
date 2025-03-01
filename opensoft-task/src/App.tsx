/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from 'react';
import './App.css'
import Front from './components/Front'
import Grid from './components/Grid'
import SideNav from './components/SideNav'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/home" element={<Home />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/sidenav" element={<SideNav />} />
          <Route path="*" element={<Navigate to="/" />} />  
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
