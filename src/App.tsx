import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Guia from './pages/Guia'
import Guias from './pages/Guias'
import Home from './pages/Home'
import NaoEncontrado from './pages/NaoEncontrado'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="guias" element={<Guias />} />
        <Route path="guias/:slug" element={<Guia />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Route>
    </Routes>
  )
}
