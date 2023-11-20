import { useEffect, useState } from 'react';
import axios from '../config/axios';
import '../styles/BooksPage.css';

const BooksPage = () => {
  const [filterId, setFilterId] = useState("");
  const [bookList, setBookList] = useState([]); // Estado actualizado para usar la lista de libros desde la API

  // Función para obtener libros desde la API
  const getBooks = async () => {
    try {
      console.log("Token en encabezados de la solicitud:", localStorage.getItem("token"));
      const res = await axios.get("/libros");
      console.log(res);
      setBookList(res.data); // Actualización del estado con los datos recibidos
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  // Filtro de libros basado en el ID del autor
  const filteredBooks = filterId
    ? bookList.filter(book => book.author && book.author.id === parseInt(filterId, 10))
    : bookList;

  return (
    <div className="container">
      <h1>Libros</h1>
      
      <div className="filter-section">
        <label htmlFor="authorId">Filtrar por ID de Autor: </label>
        <input 
          id="authorId"
          type="number"
          value={filterId}
          onChange={(e) => setFilterId(e.target.value)}
          placeholder="Ingresa ID de Autor"
        />
      </div>

      <button className="btn-add">Agregar Libro</button>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Fecha de Publicación</th>
            <th>Autor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.publicationDate}</td>
              <td>{book.author ? book.author.name : 'Autor desconocido'}</td>
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

export default BooksPage;
