import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const[exercises,setExercises] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        loadExercises();
    }, [])

    const loadExercises= async () => {
        const result = await axios.get("http://localhost:8080/exercises/all");
        setExercises(result.data);
    }

    const deleteExercise = async (id) => {
        await axios.delete(`http://localhost:8080/exercises/delete/${id}`)
        loadExercises()
    }

    return (
        <div className='container'>
            <div className='py-3'>
                <table className="table table-striped table-bordered shadow">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Ime vježbe</th>
                            <th scope="col">Mišićna skupina</th>
                            <th scope="col">Broj serija</th>
                            <th scope="col">Broj ponavljanja</th>
                            <th scope="col">Radna kilaža</th>
                            <th scope="col">Dodatne opcije</th>
                        </tr>
                    </thead>
                    <tbody>

                        {   
                            exercises.map((exercise, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{exercise.name}</td>
                                    <td>{exercise.bodyPart}</td>
                                    <td>{exercise.numberOfSets}</td>
                                    <td>{exercise.numberOfReps}</td>
                                    <td>{exercise.weight}</td>
                                    <td>
                                        <button className="btn btn-dark mx-2">Pregled</button>
                                        <Link className="btn btn-dark mx-2" to={`/update/${exercise.id}`}>Uredi</Link>
                                        <button className="btn btn-dark mx-2" onClick={() => deleteExercise(exercise.id)}>Izbriši</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}