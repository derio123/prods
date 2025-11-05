import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../serivces/AuthServices';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.logout();
            console.log('Logout response:', response.data);
            if (response.data === 'Logout successful' || response.data.message === 'Logout successful') {
                navigate('/login');
            } else {
                setMessage('Logout inválido');
            }
        } catch (error) {
            console.error('Erro no logout:', error);
            setMessage('Erro ao tentar logout');
        }
    }
    return (
        <header className="d-flex justify-content-center py-3">
            {message && <div className="alert alert-danger">{message}</div>}
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">Home</a>
                </li>
                <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#" onClick={handleLogout}
                    className="nav-link">Logout</a></li>

            </ul>
        </header>
    );
}

export default Header;