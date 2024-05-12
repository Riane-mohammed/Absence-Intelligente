import { useLoaderData } from 'react-router-dom';
import { Pnumbers } from '../../components/pNumbers';
import { useState } from 'react';

export const StudentsPage = () => {
  const studentsData = useLoaderData()
  const [students, setStudents] = useState(studentsData);
  const [class_, setClass] = useState("");
  const [search, setSearch] = useState("");

  const filterStudentsByClass = (class_) => {
    const filtered = studentsData.filter(student => student.class === class_);
    setStudents(class_ ? filtered : studentsData);
  };

  const searchbyFullName = (search) => {
    const filtered = studentsData.filter(student =>
      student.first_name.toLowerCase().includes(search.toLowerCase()) ||
      student.last_name.toLowerCase().includes(search.toLowerCase())
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
            name='class'
            value={class_}
            onChange={(e) => {
              setClass(e.target.value);
              filterStudentsByClass(e.target.value);
            }}
            className='border border-cyan-950 rounded-xl px-2 block mb-4 h-10 w-full'>
            <option value="">choisir une classe</option>
            <option value="CP1">CP1</option>
            <option value="CP2">CP2</option>
            <option value="1INFO">1INFO</option>
            <option value="2INFO">2INFO</option>
            <option value="3INFO">3INFO</option>
            <option value="1INDUS">1INDUS</option>
            <option value="2INDUS">2INDUS</option>
            <option value="3INDUS">3INDUS</option>
          </select>
        </div>
      </div>
      <table className='mx-auto my-2'>
        <thead>
          <tr className='bg-gray-200'>
            <td className='font-bold p-4'>Nom</td>
            <td className='font-bold'>Prenom</td>
            <td className='font-bold'>Phone Number</td>
            <td className='font-bold text-center'>Email</td>
            <td className='font-bold'>Password</td>
            <td className='font-bold text-center'>Classe</td>
            <td className='font-bold text-center'>Action</td>
          </tr>
        </thead>

        <tbody>
          {students.map((student) =>
            <tr key={student.id} className='border-b-2'>
              <td className='pl-1 pr-4'>{student.first_name}</td>
              <td className='pl-1 pr-4' >{student.last_name}</td>
              <td className='pl-1 pr-4' >{student.number}</td>
              <td className='pl-1 pr-4' >{student.email}</td>
              <td className='pl-1 pr-4' >{student.password}</td>
              <td className='pl-1 pr-4' >{student.class}</td>
              <td className='p-4 flex justify-center'>
                <button type='submit' className='border rounded-full px-4 py-2 bg-cyan-600 text-white font-bold hover:bg-cyan-400 me-3' ><i className="fa-solid fa-pen-to-square"></i></button>
                <button type='submit' className='border rounded-full px-4 py-2 bg-red-600 text-white font-bold hover:bg-red-400'><i className="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pnumbers nbrPages={5} />
    </div>
  )
}


//Loaders :

export const StudentsLoader = async () => {
  const res = await fetch("http://localhost:4000/users?role=3");
  return res.json();
}