import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExercise from './exercises/AddExercise';
import EditExercise from './exercises/EditExercise';
import ViewExercise from './exercises/ViewExercise';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/add' element={<AddExercise/>}/>
          <Route exact path='/update/:id' element={<EditExercise/>}/>
          <Route exact path='/viewexercise/:id' element={<ViewExercise/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;