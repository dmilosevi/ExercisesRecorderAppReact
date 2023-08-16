import React from 'react'

export default function AddExercise() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Informacije o novoj vježbi</h2>
          <div className="mb-4">
            <label htmlFor="ImeNoveVjezbe" className="form-label">Ime vježbe:</label>
            <input type={"text"} className="form-control" placeholder="Unesite ime nove vježbe" name="ImeNoveVjezbe"/>
          </div>
          <div className="mb-4">
            <label htmlFor="MisicinaSkupina" className="form-label">Mišićna skupina:</label>
            <input type={"text"} className="form-control" placeholder="Unesite mišićnu skupinu koju pogađa" name="MisicinaSkupina"/>
          </div>
          <div className="mb-4">
            <label htmlFor="BrojSerija" className="form-label">Broj serija:</label>
            <input type={"text"} className="form-control" placeholder="Unesite broj serija" name="BrojSerija"/>
          </div>
          <div className="mb-4">
            <label htmlFor="BrojPonavljanja" className="form-label">Broj ponavljanja:</label>
            <input type={"text"} className="form-control" placeholder="Unesite broj ponavljanja" name="BrojPonavljanja"/>
          </div>
          <div className="mb-4">
            <label htmlFor="RadnaKilaža" className="form-label">Radna kilaža:</label>
            <input type={"text"} className="form-control" placeholder="Unesite radnu kilažu" name="RadnaKilaža"/>
          </div>
          <button type="submit" className="btn btn-dark">Unesi</button>
          <button type="submit" className="btn btn-dark mx-2">Odustani</button>
        </div>
      </div>
    </div>
  )
}
