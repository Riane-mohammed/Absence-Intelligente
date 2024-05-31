import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Includes
import ErrorPage from './pages/shared/errorPage';
import { SignIn } from './pages/shared/signIn';

// Admin Pages
import AdminLayout from './pages/layouts/adminLayout';
import AdminDashboard from './pages/admin/dashboard';
import { ProfsPage } from './pages/admin/profs';
import { StudentsPage } from './pages/admin/students';
import { CoursesPage } from './pages/admin/modules';
import { Classes } from './pages/admin/classes';
import { AbsencesPage } from './pages/admin/absences';

// Profs Pages
import ProfLayout from './pages/layouts/profLayout';
import ProfDashboard from './pages/prof/profDashboard';
import ProfStudentsPage from './pages/prof/profStudents';
import Historique from './pages/prof/historique';

function App() {
  const { role } = useSelector(state => state.user);

  const AdminRoutes = (
    <Route path='/' element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path='etudiants' element={<StudentsPage />} />
      <Route path='etudiants?page=:page' element={<StudentsPage />} />
      <Route path='professeurs' element={<ProfsPage />} />
      <Route path='professeurs?page=:page' element={<ProfsPage />}  />
      <Route path='modules' element={<CoursesPage />} />
      <Route path='modules?page=:page' element={<CoursesPage />} />
      <Route path='classes' element={<Classes />} />
      <Route path='classes?page=:page' element={<Classes />} />
      <Route path='absenses' element={<AbsencesPage />} />
      <Route path='absenses?page=:page' element={<AbsencesPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  );

  const ProfRoutes = (
    <Route path='/' element={<ProfLayout />}>
      <Route index element={<ProfDashboard />} />
      <Route path="etudiants" element={<ProfStudentsPage />} />
      <Route path="Historique-Absneses" element={<Historique />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      role === 1 ? AdminRoutes : ProfRoutes
    )
  );

  return (
    <>
      {!role ? (
        <SignIn />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
