import React from "react";
import { signUpApi } from "./api/user";

function App() {
  const createUser = () => {
    const data = {
      email: "Adriel",
      password: "123456",
      repeatPassword: "123456",
    };
    const result = signUpApi(data);
  };

  return (
    <div>
      <h1>Hola Mundo</h1>
      <button onClick={() => createUser()}>Crear usuario</button>
    </div>
  );
}

export default App;
