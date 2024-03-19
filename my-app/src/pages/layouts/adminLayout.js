import { Outlet, NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import './adminLayout.css';

const AdminLayout = () => {
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
                        <NavLink to="absenses" className="a-link" > Absenses </NavLink>
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