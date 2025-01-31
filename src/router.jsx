import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} index />
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;