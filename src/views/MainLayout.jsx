import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#6c6d6e', fontFamily: 'sans-serif' }}>
            <Header />
            <main style={{ flex: 1, padding: '20px', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;
