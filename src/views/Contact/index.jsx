import { useState } from "react";

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
    const name = e.target.name;
    setInputs({
      ...inputs,
      [name]: e.target.value,
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
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <button onClick={handleSubmit} type="submit">
            Enviar
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
