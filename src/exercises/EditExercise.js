import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditExercise() {

  let navigate = useNavigate()

  const {id} = useParams()

  const[exercise, setExercise] = useState({
    name:"",
    bodyPart:"",
    numberOfSets:"",
    numberOfReps:"",
    weight:""
  })

  const{name, bodyPart, numberOfSets, numberOfReps, weight}=exercise

  const onInputChange = (event) => {
    setExercise({...exercise,[event.target.name]:event.target.value})
  }

  useEffect(() => {
    loadExercise()
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:8080/exercises/update/${id}`, exercise)
    navigate("/")
  }

  const loadExercise = async () => {
    const result = await axios.get(`http://localhost:8080/exercises/find/${id}`)
    setExercise(result.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Izmjena odabrane vježbe</h2>
          
          <form onSubmit={(event) => onSubmit(event)}>
            <div className="mb-4">
              <label htmlFor="ImeNoveVjezbe" className="form-label">Ime vježbe:</label>
              <input type={"text"} className="form-control" placeholder="Unesite ime nove vježbe" name="name" value={name} onChange={(event) => onInputChange(event)}/>
            </div>
            <div className="mb-4">
              <label htmlFor="MisicinaSkupina" className="form-label">Mišićna skupina:</label>
              <input type={"text"} className="form-control" placeholder="Unesite mišićnu skupinu koju pogađa" name="bodyPart" value={bodyPart} onChange={(event) => onInputChange(event)}/>
            </div>
            <div className="mb-4">
              <label htmlFor="BrojSerija" className="form-label">Broj serija:</label>
              <input type={"text"} className="form-control" placeholder="Unesite broj serija" name="numberOfSets" value={numberOfSets} onChange={(event) => onInputChange(event)}/>
            </div>
            <div className="mb-4">
              <label htmlFor="BrojPonavljanja" className="form-label">Broj ponavljanja:</label>
              <input type={"text"} className="form-control" placeholder="Unesite broj ponavljanja" name="numberOfReps" value={numberOfReps} onChange={(event) => onInputChange(event)}/>
            </div> 
            <div className="mb-4">
              <label htmlFor="RadnaKilaža" className="form-label">Radna kilaža:</label>
              <input type={"text"} className="form-control" placeholder="Unesite radnu kilažu" name="weight" value={weight} onChange={(event) => onInputChange(event)}/>
            </div>
            <button type="submit" className="btn btn-dark">Unesi</button>
            <Link className="btn btn-dark mx-2" to="/">Odustani</Link>
          </form>

        </div>
      </div>
    </div>
  )
}
