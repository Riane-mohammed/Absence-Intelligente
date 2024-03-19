import { useLoaderData } from 'react-router-dom';

export const StudentsPage = () => {
    const students = useLoaderData()

    return (
        <div className='students'>
            {students.map(student => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <h3>Class == {student.class}</h3>
                </div>
            ))}
        </div>
    )
}

//Loaders :

export const StudentsLoader = async () => {
    const res = await fetch("http://localhost:4000/users?role=student");
    return res.json();
} 