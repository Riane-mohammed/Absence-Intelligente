import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import './profLayout.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/Slices/userSlice';

const ProfLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <div className="App bg-slate-200 flex justify-between min-h-screen">
            <div className="side-bar bg-white my-1 rounded-lg mx-auto w-nav">
                <div className='flex items-center mb-5'>
                    <img src={logo} alt="Logo-ensa" className='w-20 m-1 p-2' />
                    <p>Prof name</p>
                </div>
                <ul className='nav-items'>
                    <li className='nav-item' >
                        <NavLink exact to="/" className="a-link"> Tableau de bord </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to="etudiants" className="a-link"> Etudiants </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to="Prendre-absenses" className="a-link" > Prendre Les Absences </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to="Historique-Absneses" className="a-link" > Historique Des Absenses </NavLink>
                    </li>
                    <li className='nav-item' onClick={handleLogout} >
                        <p className="logout" > Log out </p>
                    </li>
                </ul>
            </div>
            <div className="content bg-white mx-auto my-1 rounded-lg w-content">
                <Outlet />
            </div>
        </div>
    )
}

export default ProfLayout;