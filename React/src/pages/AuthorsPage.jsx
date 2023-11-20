import React, { useState } from 'react';
import '../styles/AuthorsPage.css';

const AuthorPage = () => {
  const [authors, setAuthors] = useState([
    { id: 1, name: 'Gabriel García Márquez', nacionality: 'Colombiana' },
    { id: 2, name: 'Mario Vargas Llosa', nacionality: 'Peruana' }
  ]);

  return (
    <div className="container">
      <h1>Autores</h1>
      <button className="btn-add">Agregar Autor</button> {/* Botón para agregar un nuevo autor */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Nacionalidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.name}</td>
              <td>{author.nacionality}</td>
              <td>
                <button className="btn-edit">Editar</button>
                <button className="btn-delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorPage;