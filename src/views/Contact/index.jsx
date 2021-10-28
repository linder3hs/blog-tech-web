import { useState } from "react";
import { TextField, Button } from "@mui/material";

const Contact = () => {
  // * Teniendo un solo state para todos mis inputs
  // * paso 1: Definit los valores iniciales de mis inputs
  // * en un objecto
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  // * Crear una funcion que me permita actualizar los valores de
  // * mis inputs esta debe recibir el evento de los inputs
  const handleInputChange = (e) => {
    // aca recibo el evento el cual contiene el name y el value
    // el name es un atributo del input
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // e -> cuando es un submit puedo usar preventDefault
    e.preventDefault();
    console.log("name", inputs.name);
    console.log("email", inputs.email);
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form action="">
        <p>
          <TextField
            type="text"
            name="name"
            label="Nombre"
            value={inputs.name}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <TextField
            type="text"
            label="Email"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <Button onClick={handleSubmit} variant="contained" type="submit">
            Enviar
          </Button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
