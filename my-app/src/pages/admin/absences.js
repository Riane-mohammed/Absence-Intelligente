import { useLoaderData } from 'react-router-dom';
import { Pnumbers } from '../../components/pNumbers';
import { useState } from 'react';



export const AbsencesPage = () => {
  const studentsData = useLoaderData();
  const [students, setStudents] = useState(studentsData);
  const [module_, setModule] = useState("");
  const [search, setSearch] = useState("");

  const filterStudentsByModule = (module_) => {
    const filtered = studentsData.filter(student => student.courseName.toLowerCase() === module_.toLowerCase());
    setStudents(module_ ? filtered : studentsData);
  };

  const searchbyFullName = (search) => {
    const filtered = studentsData.filter(student =>
      student.studentName.toLowerCase().includes(search.toLowerCase())
    );
    setStudents(search ? filtered : studentsData);
  };
    return ( 
      <div className="">
      <div className="m-5 text-2xl font-bold">
        <h1>Etudiants</h1>
      </div>
      <div className='flex justify-between mx-16'>
        <div className='relative flex'>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              searchbyFullName(e.target.value);
            }}
            className='border border-cyan-950 rounded-xl p-4 block mb-4 h-10 w-full' />
          <div>
            <i className="fa-solid fa-magnifying-glass absolute top-3 right-2 cursor-pointer"></i>
          </div>
        </div>
        <div className='flex' >
          <h2 className='font-bold mr-2 text-xl'>Filtre</h2>
          <select
            name='module'
            value={module_}
            onChange={(e) => {
              setModule(e.target.value);
              filterStudentsByModule(e.target.value);
            }}
            className='border border-cyan-950 rounded-xl px-2 block mb-4 h-10 w-full'>
            <option value="">choisir un module</option>
            <option value="Java">Java</option>
            <option value="Security">Security</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
      </div>
      <table className='mx-auto my-2'>
        <thead>
          <tr className='bg-gray-200 text-center'>
            <td className='font-bold p-4 text-center'>Nom</td>
            <td className='font-bold text-center'>Nombre d'absences</td>
            <td className='font-bold text-center'>Plus d'infos</td>
          </tr>
        </thead>

        <tbody>
          {students.map((student) =>
            <tr key={student.id} className='border-b-2'>
              <td className='pl-1 pr-4 text-center'>{student.studentName}</td>
              <td className='pl-1 pr-4 text-center'>{student.nombre_abs}</td>
              {/* class o lfiltre by class */} 
              <td className='p-4 flex justify-center'>
              <button type='submit' className='border rounded-full px-4 py-2 bg-yellow-300 text-white font-bold hover:bg-yellow-500 me-3' ><i className="fa-solid fa-info-circle"></i></button>
            </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pnumbers nbrPages={5} />
    </div>
    );
}

export const AbsencesLoader = async () => {
  const res = await fetch("http://localhost:4000/absences");
  return res.json();
}