import { useEffect, useState } from 'react';
import '../styles/layouts.css'
import { Link } from 'react-router-dom';

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header ${isFixed ? 'fixed slide-down' : 'absolute'}`}>
            <div>
                <img src="./assets/logo.png" alt="logo" className='hidden md:block' width={100}></img>
                <img src="./assets/logo-192.png" alt="logo" className='block md:hidden' width={40}></img>
            </div>
            <ul className='nav'>
                <li className="nav-item group"><Link to='/'>Home</Link></li>
                <li className="nav-item group"><Link to='/about'>About</Link></li>
                <li className="nav-item group"><Link to='/products'>Products</Link></li>
                <li className="nav-item group"><Link to='/contact'>Contact</Link></li>
            </ul>

            <ul className={`${menuOpen ? 'mobile-nav' : 'hidden'}`}>
                <li className="nav-item group" onClick={toggleMenu} ><Link to='/'>Home</Link></li>
                <li className="nav-item group" onClick={toggleMenu} ><Link to='/about'>About</Link></li>
                <li className="nav-item group" onClick={toggleMenu} ><Link to='/products'>Products</Link></li>
                <li className="nav-item group" onClick={toggleMenu} ><Link to='/contact'>Contact</Link></li>
            </ul>
            <button className='flex md:hidden' onClick={toggleMenu} >
                <svg className="w-6 h-6 text-secondary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
        </div>
    )
}