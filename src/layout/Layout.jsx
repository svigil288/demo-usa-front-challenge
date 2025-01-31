import Header from '../components/Header';
import {Outlet} from 'react-router-dom';

const Layout = () => {    
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1 flex-col h-full bg-gray-100">
            <Outlet/>
            </main>
        </div>
    );
}

export default Layout;