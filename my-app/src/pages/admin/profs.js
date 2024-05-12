import { useLoaderData } from 'react-router-dom';
import { Pnumbers } from '../../components/pNumbers';
import { useState } from 'react';

export const ProfsPage = () => {
    const profData = useLoaderData();
    const [profs, setProfs] = useState(profData);
    const [department, setDepartment] = useState("");
    const [search, setSearch] = useState("");

    const filterProfessorsByDepartment = (department) => {
        const filtered = profData.filter(prof => prof.department === department);
        setProfs(department ? filtered : profData);
    };

    const searchbyFullName = (search) => {
        const filtered = profData.filter(prof =>
            prof.first_name.toLowerCase().includes(search.toLowerCase()) ||
            prof.last_name.toLowerCase().includes(search.toLowerCase())
        );
        setProfs(search ? filtered : profData);
    };

    return (
        <div className="">
            <div className="m-5 text-2xl font-bold">
                <h1>Professeurs</h1>
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
                        name='department'
                        value={department}
                        onChange={(e) => {
                            setDepartment(e.target.value);
                            filterProfessorsByDepartment(e.target.value);
                        }}
                        className='border border-cyan-950 rounded-xl px-2 block mb-4 h-10 w-full'>
                        <option value="">choisir un Departement</option>
                        <option value="Informatique">Informatique</option>
                        <option value="Industriel">Industriel</option>
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
                        <td className='font-bold text-center'>Departement</td>
                        <td className='font-bold text-center'>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {profs.map((prof) =>
                        <tr key={prof.id} className='border-b-2'>
                            <td className='pl-1 pr-4'>{prof.first_name}</td>
                            <td className='pl-1 pr-4' >{prof.last_name}</td>
                            <td className='pl-1 pr-4' >{prof.number}</td>
                            <td className='pl-1 pr-4' >{prof.email}</td>
                            <td className='pl-1 pr-4' >{prof.password}</td>
                            <td className='pl-1 pr-4' >{prof.department}</td>
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

export const ProfsLoader = async () => {
    const res = await fetch("http://localhost:4000/users?role=2");
    return res.json();
} 