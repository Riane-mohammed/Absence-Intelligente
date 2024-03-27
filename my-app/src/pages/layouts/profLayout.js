import { Outlet, NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import './profLayout';

const ProfLayout = () => {
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
                </ul>
            </div>
            <div className="content bg-white mx-auto my-1 rounded-lg w-content">
                <Outlet />
            </div>
        </div>
    )
}

export default ProfLayout;