import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import './adminLayout.css';
import { logoutUser } from '../../store/Slices/userSlice';
import { useDispatch } from 'react-redux';

const AdminLayout = () => {
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
                    <p>Administrateur</p>
                </div>
                <ul className='nav-items'>
                    <li className='nav-item' >
                        <NavLink exact to="/" className="a-link"> Tableau de bord </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to="etudiants" className="a-link"> Etudiants </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to="professeurs" className="a-link"> Professeurs </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to="modules" className="a-link"> Modules </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to="emploie-temps" className="a-link" > Emplois de Temps </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to="Justif-absenses" className="a-link"> Justification Des Absences </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to="absenses" className="a-link" > Absenses </NavLink>
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

export default AdminLayout