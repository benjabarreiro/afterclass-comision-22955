import React from "react";
import "./Wrapper.css";

export default function Wrapper({ children }) {
  return (
    <div className="estilos">
      <header>Soy header</header>
      {children}
      <footer>Soy footer</footer>
    </div>
  );
}
