import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Includes
import ErrorPage from './pages/shared/errorPage';
import { SignIn } from './pages/shared/signIn';

// Admin Pages
import AdminLayout from './pages/layouts/adminLayout';
import AdminDashboard from './pages/admin/dashboard';
import { ProfsPage, ProfsLoader } from './pages/admin/profs';
import { StudentsLoader, StudentsPage } from './pages/admin/students';
import { coursesLoader, CoursesPage } from './pages/admin/modules';
import { Classes } from './pages/admin/classes';
import { AbsencesLoader, AbsencesPage } from './pages/admin/absences';
import EmploisPage from './pages/admin/emplois';

// Profs Pages
import ProfLayout from './pages/layouts/profLayout';
import ProfDashboard from './pages/prof/profDashboard';
import ProfStudentsPage from './pages/prof/profStudents';
import {TakeAbsencesPage } from './pages/prof/takeAbsences';
import Historique from './pages/prof/historique';

function App() {
  const { role } = useSelector(state => state.user);

  const AdminRoutes = (
    <Route path='/' element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path='etudiants' element={<StudentsPage />} loader={StudentsLoader} />
      <Route path='professeurs' element={<ProfsPage />} loader={ProfsLoader} />
      <Route path='modules' element={<CoursesPage />} loader={coursesLoader} />
      <Route path='classes' element={<Classes />} />
      <Route path='emploie-temps' element={<EmploisPage />} />
      <Route path='absenses' element={<AbsencesPage />} loader={AbsencesLoader} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  );

  const ProfRoutes = (
    <Route path='/' element={<ProfLayout />}>
      <Route index element={<ProfDashboard />} />
      <Route path="etudiants" element={<ProfStudentsPage />} loader={StudentsLoader}/>
      <Route path="Prendre-absenses" element={<TakeAbsencesPage />}/>
      <Route path="Historique-Absneses" element={<Historique />} loader={AbsencesLoader} />
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
