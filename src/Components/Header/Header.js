import React from "react";
import LinkWrapper from "../../Utils/LinkWrapper";

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper indigo lighten-2">
        <LinkWrapper to="/" className="brand-logo">
          Casa do Código
        </LinkWrapper>
        <ul className="right">
          <li>
            <LinkWrapper to="/autores">Autores</LinkWrapper>
          </li>
          <li>
            <LinkWrapper to="/livros">Livros</LinkWrapper>
          </li>
          <li>
            <LinkWrapper to="/sobre">Sobre</LinkWrapper>
          </li>
        </ul>
      </div>
    </nav>
  );
}
