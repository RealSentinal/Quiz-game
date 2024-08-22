import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import Quiz from './components/Quiz.tsx';
import NotFound from './components/NotFound.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  </StrictMode>,
)