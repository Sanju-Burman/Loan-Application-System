import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <nav className="p-4 bg-blue-600 text-white flex gap-4" >
                <Link to="/" > Home </Link>
                <Link to="/apply" > Apply </Link>
                <Link to="/dashboard" > Dashboard </Link>
                <Link to="/calendar" > Calendar </Link>
                <Link to="/compare" > Compare </Link>
            </nav>
            <main className="p-4" > {children} </main>
        </div>
    );
};

export default Layout;