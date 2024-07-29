import { Outlet } from 'react-router-dom';

import Header from './header';
import Footer from './footer';

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}   