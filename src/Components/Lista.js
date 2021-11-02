import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LibreriaContext } from '../Context/LibreriaContext'
import { useContext } from 'react';

const Lista = () => {
    const { wishList, eliminar } = useContext(LibreriaContext);
    return (
        <div className="Listadelibros">
            <h4 style={{ marginBottom: '25px' }}>Lista de deseos</h4>
            {
                wishList.length === 0
                    ?
                    <p>No has agregados libros</p>
                    :
                    <Table variant="dark">
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
                             wishList.map((li, i) => {
                                return (<tr key={i}>
                                        <td>{li.codigo}</td>
                                        <td>{li.titulo}</td>
                                        <td>{li.idioma}</td>
                                        <td>{<Button variant="danger" onClick={() => eliminar(li)}>Eliminar</Button>}</td></tr>)
                                })
                            }
                        </tbody>
                    </Table>
                }
        </div>
    );
}

export default Lista;