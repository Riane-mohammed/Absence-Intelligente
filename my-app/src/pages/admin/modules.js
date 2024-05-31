import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pnumbers } from '../../components/pNumbers';

export const CoursesPage = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [courses, setCourses] = useState([]);
    const [class_, setClass] = useState("");
    const [search, setSearch] = useState("");
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    const navigate = useNavigate();

    const handlePageChange = (page) => {
        setCurrentPage(page);
        navigate(`/modules?page=${page}`);
    };

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch(`http://localhost:4000/courses`);
            const data = await res.json();
            setTotalCount(data.length);
            setAllCourses(data);
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const paginatedData = data.slice(start, end);
            setCourses(paginatedData);
        };

        fetchCourses();
    }, [currentPage, itemsPerPage]);

    const filterCoursesByClass = (class_) => {
        const filtered = allCourses.filter(course => course.class === class_);
        setTotalCount(filtered.length);
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = filtered.slice(start, end);
        setCourses(class_ ? paginatedData : allCourses.slice(start, end));
    };

    const searchByName = (search) => {
        const filtered = allCourses.filter(course =>
            course.name.toLowerCase().includes(search.toLowerCase())
        );
        setTotalCount(filtered.length);
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = filtered.slice(start, end);
        setCourses(search ? paginatedData : allCourses.slice(start, end));
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
                            searchByName(e.target.value);
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
                            filterCoursesByClass(e.target.value);
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
            <div className='tab rounded-tab mx-8 my-4 p-2 pl-6 shadow-tab'>
                <div className="head grid grid-cols-4 p-2 mb-5">
                    <p className='font-bold'>Nom</p>
                    <p className='font-bold text-center'>Professeur</p>
                    <p className='font-bold text-center'>Classe</p>
                    <p className='font-bold text-center'>Action</p>
                </div>
                <div className="cont">
                    {courses.map((course) =>
                        <div key={course.id} className='grid grid-cols-4 py-3 cursor-auto hover:bg-slate-100 rounded-lg'>
                            <p className='pl-1'>{course.name}</p>
                            <p className='pl-1 text-center' >{course.professor}</p>
                            <p className='pl-1 text-center' >{course.class}</p>
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