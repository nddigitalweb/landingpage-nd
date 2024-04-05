import { useState } from "react";
import "./modal.css";
import saveInDb from "../../utils/saveInFirebase";

export default function Modal({ close }) {
  const [company, setCompany] = useState("");
  const [employees, setEmployees] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const template = `https://api.whatsapp.com/send?phone=+34631544570&text=QUIERO+MI+ANALISIS+%F0%9F%94%A5%0A%0A${company}+%F0%9F%8F%AD%0A${email}+%E2%9C%89%EF%B8%8F%0A${employees}+%F0%9F%A7%91`;

  async function handleClick(e) {
    try {
      e.preventDefault();
      console.log("click");
      setLoading(true);
      if (validateFields()) {
        await saveInDb(company, employees, email);
        window.location.replace(template);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  function validateFields() {
    if (company.trim() === "" || email.trim() === "" || employees.trim() === "")
      return false;
    return true;
  }

  return (
    <div
      id="modal-container"
      className="flex items-center justify-center flex-col"
    >
      <div id="modal" className="max-w-[200px]">
        <p className="text-lg font-medium mb-5">Completa el formulario</p>
        <form className="flex flex-col" id="modal-form">
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="p-2"
            placeholder="Nombre de la empresa"
            type="text"
          />
          <input
            value={employees}
            onChange={(e) => setEmployees(e.target.value)}
            className="p-2"
            placeholder="Cantidad de empleados"
            type="text"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2"
            placeholder="E-mail"
            type="text"
          />
          <button
            onClick={(e) => handleClick(e)}
            className="main mx-auto my-2 w-full"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
      <button
        onClick={() => close()}
        className="bg-transparent border-none text-white font-medium"
      >
        CERRAR
      </button>
    </div>
  );
}
