import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewExercise() {

  const[exercise, setExercise] = useState({
    name:"",
    bodyPart:"",
    numberOfSets:"",
    numberOfReps:"",
    weight:""
  }) 

  const {id} = useParams()

  useEffect(() => {
    loadExercise()
  }, [])

  const loadExercise = async () => {
    const result = await axios.get(`http://localhost:8080/exercises/find/${id}`)
    setExercise(result.data)
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Pregled odabrane vježbe</h2>

                <div className='card'>
                    <div className='card-header'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'><b>ID: </b>{exercise.id}</li>
                            <li className='list-group-item'><b>Ime vježbe: </b>{exercise.name}</li>
                            <li className='list-group-item'><b>Mišićna skupina: </b>{exercise.bodyPart}</li>
                            <li className='list-group-item'><b>Broj serija: </b>{exercise.numberOfSets}</li>
                            <li className='list-group-item'><b>Broj ponavljanja: </b>{exercise.numberOfReps}</li>
                            <li className='list-group-item'><b>Radna kilaža: </b>{exercise.weight}</li>
                        </ul>
                    </div>
                </div>

                <Link className="btn btn-dark mt-4" to={"/"}>Početna stranica</Link>

            </div>
        </div>
    </div>
  )
}
