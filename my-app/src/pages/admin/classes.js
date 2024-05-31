import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pnumbers } from '../../components/pNumbers';

export const Classes = () => {
    const [allClasses, setAllClasses] = useState([]);
    const [classes, setClasses] = useState([]);
    const [department, setDepartment] = useState("");
    const [search, setSearch] = useState("");
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const navigate = useNavigate();

    const handlePageChange = (page) => {
        setCurrentPage(page);
        navigate(`/classes?page=${page}`);
    };
    
    useEffect(() => {
        const fetchClasses = async () => {
            const res = await fetch(`http://localhost:4000/classes`);
            const data = await res.json();
            setTotalCount(data.length);
            setAllClasses(data);
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const paginatedData = data.slice(start, end);
            setClasses(paginatedData);
        };

        fetchClasses();
    }, [currentPage, itemsPerPage]);

    const filterClassesByDepartment = (department) => {
        const filtered = allClasses.filter(class_ => class_.filiere.toLowerCase() === department.toLowerCase());
        setTotalCount(filtered.length);
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = filtered.slice(start, end);
        setClasses(department ? paginatedData : allClasses.slice(start, end));
    };

    const searchByName = (search) => {
        const filtered = allClasses.filter(class_ =>
            class_.name.toLowerCase().includes(search.toLowerCase())
        );
        setTotalCount(filtered.length);
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = filtered.slice(start, end);
        setClasses(search ? paginatedData : allClasses.slice(start, end));
    };

    return (
        <div className="">
            <div className="m-5 text-2xl font-bold">
                <h1>Classes</h1>
            </div>
            <div className='flex justify-between mx-16'>
                <div className='relative flex'>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            searchByName(e.target.value);
                        }}
                        className='border border-cyan-950 rounded-xl p-4 block mb-4 h-10 w-full' />
                    <div>
                        <i className="fa-solid fa-magnifying-glass absolute top-3 right-2 cursor-pointer"></i>
                    </div>
                </div>
                <div className='flex' >
                    <h2 className='font-bold mr-2 text-xl'>Filter</h2>
                    <select
                        name='department'
                        value={department}
                        onChange={(e) => {
                            setDepartment(e.target.value);
                            filterClassesByDepartment(e.target.value);
                        }}
                        className='border border-cyan-950 rounded-xl px-2 block mb-4 h-10 w-full'>
                        <option value="">Choose a Department</option>
                        <option value="Informatique">Informatique</option>
                        <option value="Industriel">Industriel</option>
                    </select>
                </div>
            </div>
            <div className='tab rounded-tab mx-8 my-4 p-2 pl-6 shadow-tab'>
                <div className="head grid grid-cols-3 p-2 mb-5">
                    <p className='font-bold'>Name</p>
                    <p className='font-bold'>Department</p>
                    <p className='font-bold text-center'>Action</p>
                </div>
                <div className="cont">
                    {classes.map((class_) =>
                        <div key={class_.id} className='grid grid-cols-3 py-3 cursor-auto hover:bg-slate-100 rounded-lg'>
                            <p className='pl-1'>{class_.name}</p>
                            <p className='pl-1' >{class_.filiere}</p>
                            <div className='flex justify-center'>
                                <button type='submit' className='border rounded-full px-4 py-2 bg-cyan-600 text-white font-bold hover:bg-cyan-400 me-3' ><i className="fa-solid fa-pen-to-square"></i></button>
                                <button type='submit' className='border rounded-full px-4 py-2 bg-red-600 text-white font-bold hover:bg-red-400'><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Pnumbers nbrPages={Math.ceil(totalCount / itemsPerPage)} onPageChange={handlePageChange} currentPage={currentPage} />
        </div>
    )
}
