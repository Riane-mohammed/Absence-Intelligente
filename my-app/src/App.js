import {createBrowserRouter, createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'

//includs: 
import ErrorPage from './pages/errorPage';

//Admin Pages: 
import AdminLayout from './pages/layouts/adminLayout';
import AdminDashboard from './pages/admin/dashboard';
import { ProfsPage ,ProfsLoader } from './pages/admin/profs';
import { StudentsPage ,StudentsLoader } from './pages/admin/students';
import ModulesPage from './pages/admin/modules';
import EmploisPage from './pages/admin/emplois';
import AbsencesPage from './pages/admin/absences';

//Profs Pages :
import ProfLayout from './pages/layouts/profLayout';
import ProfDashboard from './pages/prof/profDashboard';
import ProfStudentsPage from './pages/prof/profStudents';
import TakeAbsencesPage from './pages/prof/takeAbsences';
import ProfModulesPage from './pages/prof/profModules';
import Historique from './pages/prof/historique';


let id = 1;

const AdminRoutes = (
  <Route path='/' element={<AdminLayout />}>
    <Route index element={<AdminDashboard />} />
    <Route path='etudiants' element={<StudentsPage />} loader={StudentsLoader} />
    <Route path='professeurs' element={<ProfsPage />} loader={ProfsLoader} />
    <Route path='modules' element={<ModulesPage />} />
    <Route path='emploie-temps' element={<EmploisPage />} />
    <Route path='absenses' element={<AbsencesPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

const ProfRoutes = (
  <Route path='/' element={<ProfLayout />}>
    <Route index element={<ProfDashboard />} />
    <Route path="etudiants" element={<ProfStudentsPage />} />
    <Route path="Prendre-absenses" element={<TakeAbsencesPage />} />
    <Route path="modules" element={<ProfModulesPage />} />
    <Route path="Historique-Absneses" element={<Historique />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    id === 0 ? AdminRoutes : ProfRoutes
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
