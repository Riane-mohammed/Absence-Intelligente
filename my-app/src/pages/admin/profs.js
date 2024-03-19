import { useLoaderData } from 'react-router-dom';

export const ProfsPage = () => {
    const profs = useLoaderData()

    return (
        <div className='profs'>
            {profs.map(prof => (
                <div key={prof.id}>
                    <h2>{prof.name}</h2>
                    <h3> ==  {prof.department}</h3>
                </div>
            ))}
        </div>
    )
}

//Loaders :

export const ProfsLoader = async () => {
    const res = await fetch("http://localhost:4000/users?role=professor");
    return res.json();
} 