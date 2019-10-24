import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Students from './components/Students'
import NewStudent from './components/NewStudent'
import signinform from './components/signin'
import maincontent from'./pages/maincontent';



function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="./pages/maincontent" component={maincontent}/>
      {/* <Route path="./components/signin" component={signinform}/> */}
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path='/students' component={Students} />
      <Route path='/students/new' component={NewStudent} />
      </div>
    </Router>
  );
}

export default App;
