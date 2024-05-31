import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pnumbers } from '../../components/pNumbers';

const ProfStudentsPage = () => {
    const [allStudents, setAllStudents] = useState([]);
    const [students, setStudents] = useState([]);
    const [class_, setClass] = useState("");
    const [search, setSearch] = useState("");
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6); // Number of items per page
    const navigate = useNavigate();

    const handlePageChange = (page) => {
        setCurrentPage(page);
        navigate(`/etudiants?page=${page}`);
    };

    const filterStudentsByClass = (class_) => {
        const filtered = allStudents.filter(student => student.class === class_);
        setTotalCount(filtered.length);
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = filtered.slice(start, end);
        setStudents(class_ ? paginatedData : allStudents.slice(start, end));
    };

    const searchByFullName = (search) => {
        const filtered = allStudents.filter(student =>
            student.first_name.toLowerCase().includes(search.toLowerCase()) ||
            student.last_name.toLowerCase().includes(search.toLowerCase())
        );
        setTotalCount(filtered.length);
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = filtered.slice(start, end);
        setStudents(search ? paginatedData : allStudents.slice(start, end));
    };

    useEffect(() => {
        const fetchStudents = async () => {
            const res = await fetch(`http://localhost:4000/users?role=3`);
            const data = await res.json();
            setTotalCount(data.length);
            setAllStudents(data);
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const paginatedData = data.slice(start, end);
            setStudents(paginatedData);
        };

        fetchStudents();
    }, [currentPage, itemsPerPage]);

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
                            searchByFullName(e.target.value);
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
            <div className='tab rounded-tab mx-8 my-4 p-2 pl-6 shadow-tab'>
                <div className="head grid grid-cols-7 p-2 mb-5">
                    <p className='font-bold'>Nom</p>
                    <p className='font-bold'>Prenom</p>
                    <p className='font-bold'>Phone Number</p>
                    <p className='font-bold text-center'>Email</p>
                    <p className='font-bold text-center'>Password</p>
                    <p className='font-bold text-center'>Classe</p>
                    <p className='font-bold text-center'>Infos</p>
                </div>
                <div className="cont">
                    {students.map((student) =>
                        <div key={student.id} className='grid grid-cols-7 py-3 cursor-auto hover:bg-slate-100 rounded-lg'>
                            <p className='pl-1'>{student.first_name}</p>
                            <p className='pl-1' >{student.last_name}</p>
                            <p className='pl-1 ms-2' >{student.number}</p>
                            <p className='pl-1' >{student.email}</p>
                            <p className='pl-1 text-center' >{student.password}</p>
                            <p className='pl-1 text-center' >{student.class}</p>
                            <div className='flex justify-center'>
                                <button type='submit' className='border rounded-full px-4 py-2 bg-yellow-300 text-white font-bold hover:bg-yellow-500 me-3' ><i className="fa-solid fa-info-circle"></i></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Pnumbers nbrPages={Math.ceil(totalCount / itemsPerPage)} onPageChange={handlePageChange} currentPage={currentPage} />
        </div>
    );
}

export default ProfStudentsPage;

