import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/main'
import SeeAnimePage from './pages/SeeAnime/main'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/see-anime/:id' element={<SeeAnimePage />} />
        </Routes>
    )
}