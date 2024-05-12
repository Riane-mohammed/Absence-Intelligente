import { useLoaderData } from 'react-router-dom';
import { Pnumbers } from '../../components/pNumbers';
import { useState } from 'react';

export const CoursesPage = () => {
    const cousrsesData = useLoaderData()
    const [cousrses, setCousrses] = useState(cousrsesData);
    const [class_, setClass] = useState("");
    const [search, setSearch] = useState("");

    const filtercousrsesByClass = (class_) => {
        const filtered = cousrsesData.filter(cousrse => cousrse.class === class_);
        setCousrses(class_ ? filtered : cousrsesData);
    };

    const searchbyFullName = (search) => {
        const filtered = cousrsesData.filter(cousrse =>
            cousrse.name.toLowerCase().includes(search.toLowerCase())
        );
        setCousrses(search ? filtered : cousrsesData);
    };

    return (
        <div className="">
            <div className="m-5 text-2xl font-bold">
                <h1>Modules</h1>
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
                            filtercousrsesByClass(e.target.value);
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
                        <td className='font-bold text-center'>Professeur</td>
                        <td className='font-bold text-center'>Classe</td>
                        <td className='font-bold text-center'>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {cousrses.map((cousrse) =>
                        <tr key={cousrse.id} className='border-b-2'>
                            <td className='pl-4 w-tdCourse'>{cousrse.name}</td>
                            <td className='pl-4 w-tdCourse text-center'>{cousrse.professor}</td>
                            <td className='pl-4 w-tdCourse text-center' >{cousrse.class}</td>
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

export const coursesLoader = async () => {
    const res = await fetch("http://localhost:4000/courses");
    return res.json();
}