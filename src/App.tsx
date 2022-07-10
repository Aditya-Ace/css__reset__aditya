import { Routes, Route } from 'react-router-dom'

// Internal Files import
import Home from './pages/Home'
import About from './pages/About'

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </main>
  )
}

export default App
