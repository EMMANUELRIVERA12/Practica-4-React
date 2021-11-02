import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { LibreriaContext } from '../Context/LibreriaContext'

export default function Libros() {
    const { catalogo, agregar } = useContext(LibreriaContext);
    return (
        <div className="Cartelera">
            <h4 style={{ marginBottom: '25px' }}>Libros disponibles</h4>
            {
                <Table>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Titulo</th>
                            <th>Idioma</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            catalogo.map((li, i) => {

                                return (<tr key={i}>
                                    <td>{li.codigo}</td>
                                    <td>{li.titulo}</td>
                                    <td>{li.idioma}</td>
                                    <td>{<Button variant="success" disabled={li.desactivado} onClick={() => agregar(li)}>Agregar</Button>}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </Table>
            }
        </div>
    )
}
