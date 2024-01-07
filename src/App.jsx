import { useState } from "react";
import "./App.css";

// https://api.github.com/users/CONCATENAR_CON_USUARIO

// COMPONENTS
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";

import axios from "axios";

// MUI
import { TextField, Button } from "@mui/material";
import Alert from "@mui/material/Alert";

const App = () => {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  // console.log(error);

  const onChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    const userInput = value.toLowerCase().replace(/ /g, ""); // sanitizamos la variable de espacios
    if (userInput) {
      axios(`https://api.github.com/users/${userInput}`)
        .then((res) => setUserData(res.data))
        .catch((message) => setError(message));
    }
    setValue("");
  };

  return (
    <div className="App">
      <Header />
      <Button
        variant="contained"
        onClick={() => alert("Hiciste click")}
        sx={{ mt: "20px" }}
      >
        Click
      </Button>
      <form className="Form" onSubmit={onSubmit}>
        <TextField
          placeholder="Buscar Usuario"
          variant="outlined"
          className="Textfield"
          value={value}
          onChange={onChange}
        />
        <Button variant="contained" className="btn" type="submit">
          Buscar
        </Button>
      </form>

      {error ? <Alert severity="error">{error.message}</Alert> : null}

      {userData.id ? <CardUser userData={userData} /> : null}
    </div>
  );
};

export default App;
