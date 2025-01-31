import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout';
import HistogramDetail from './pages/HistogramDetail';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} index />
                <Route path="/histogram/:year" element={<HistogramDetail />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;