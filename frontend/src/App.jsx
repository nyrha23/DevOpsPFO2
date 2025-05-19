import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/personas')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          setPersonas(data);
          setLoading(false);
      })
      .catch(error => {
          setError(error);
          setLoading(false);
      });
  },[]);

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  if (error) {
    return <div>Error al cargar los usuarios: {error.message}</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Lista de Personas</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {personas.map(personas => (
            <tr key={personas.id}>
              <td>{personas.id}</td>
              <td>{personas.nombre}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
