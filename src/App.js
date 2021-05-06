import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {useState} from "react";
import LoginForm from "./components/LoginForm";
import SnackbarMsg from "./components/Snackbar";


function App() {
    const [open, setOpen] = useState(false);
    const [snackBarOpen, setSnackBarOpen] = useState(false)


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const handleSnackBarOpen = () => {
        setSnackBarOpen(true)
    }

  return (
      <div>
          <Router>
              <Navbar onOpen={handleOpen} />
              <Switch>
                  <Route path="/todos">
                      <TodoList/>
                  </Route>
                  <Route path="/register">
                      <RegisterForm/>
                  </Route>
                  <Route path="/todo-form">
                      <TodoForm/>
                  </Route>
              </Switch>
          </Router>
          <LoginForm open={open} onClose={handleClose} />
          <button onClick={handleSnackBarOpen}></button>
          <SnackbarMsg snackBarOpen={snackBarOpen} setSnackBarOpen={setSnackBarOpen}/>
      </div>


  );
}

export default App;
