import { HashRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ProjectBreakdown } from './pages/ProjectBreakdown'

function App() {
  return (
    <HashRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectBreakdown />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
