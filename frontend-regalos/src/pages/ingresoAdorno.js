/* eslint-disable react/jsx-no-comment-textnodes */
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import React from "react";
import axios from "axios";

const url = "https://regalos-ya1-1ncf.vercel.app/api/adorno";

class App extends React.Component {
  //Estado del data y del form
  state = {
    data: [],
    form: {
      idAdorno:"",
      nombre: "",
      precio: "",
      url: "",
      descripcion: "",
    },
    modalInsert: false,
    modalDelete: false,
    modalEdit: false,
  };
  
  getQuery = () => {
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  postQuery = async () => {
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.modalInsert();
        this.getQuery();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  putQuery = () => {
    axios
      .put(url + "/" + this.state.form.idAdorno, this.state.form)
      .then((response) => {
        this.setState({ modalEdit: false })
        this.getQuery();
      });
  };

  deleteQuery = () => {
    axios.delete(url + "/" + this.state.form.idAdorno).then((response) => {
      this.setState({ modalDelete: false });
      this.getQuery();
    });
  };
  componentDidMount() {
    this.getQuery();
  }
  //Controlador de cambios
  handleChange = (e) => {
    e.persist();
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  //Modal insert
  modalInsert = () => {
    this.setState({
      modalInsert: !this.state.modalInsert,
      form: { ...this.state.form, idAdorno: this.state.data.length + 1 },
    });
  };
  modalInsertHide = () => {
    this.setState({
      modalInsert: !this.state.modalInsert,
    });
  };

  //Modal editar
  modalEdit = () => {
    this.setState({
      modalEdit: !this.state.modalEdit,
    });
  };
  modalEditHide = () => {
    this.setState({
      modalEdit: !this.state.modalEdit,
    });
  };

  selectElement = (element) => {
    this.setState({
      form: {
        idAdorno: element.idAdorno,
        nombre: element.nombre,
        precio: element.precio,
        url: element.url,
        descripcion: element.descripcion,
      },
    });
  };

  render() {
    const { form } = this.state;
    return (
      <>
        <Container>
          <br />
          <Button
            className="btn btn-success"
            onClick={() => {
              this.setState({ form: null, tipoModal: "insertar" });
              this.modalInsert(0);
            }}
          >
            Insertar Producto
          </Button>
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>URL</th>
                <th>Descripcion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((element) => (
                <tr>
                  <td>{element.idAdorno}</td>
                  <td>{element.nombre}</td>
                  <td>{element.precio}</td>
                  <td>{element.url}</td>
                  <td>{element.descripcion}</td>
                  <td>
                    <Button
                      className="btn btn-primary"
                      onClick={() => {
                        this.selectElement(element);
                        this.modalEdit();
                      }}
                    >
                      Editar
                    </Button>
                    {"   "}
                    <Button
                      className="btn btn-danger"
                      onClick={() => {
                        this.selectElement(element);
                        this.setState({ modalDelete: true });
                      }}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal
          isOpen={/*Modal para insertar productos*/ this.state.modalInsert}
        >
          <ModalHeader style={{ display: "block" }}>
            <span
              style={{ float: "right" }}
              onClick={() => this.modalInsertHide()}
            >
              x
            </span>
          </ModalHeader>

          <ModalBody>
            <div className="form-group">
              <label htmlFor="idAdorno">ID</label>
              <input
                className="form-control"
                type="text"
                name="idAdorno"
                id="idAdorno"
                onChange={this.handleChange}
                value={form.idAdorno}
                readOnly
              />
              <br />
              <label htmlFor="nombre">Nombre</label>
              <input
                className="form-control"
                type="text"
                name="nombre"
                id="nombre"
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="precio">Precio</label>
              <input
                className="form-control"
                type="number"
                name="precio"
                id="precio"
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="url">URL</label>
              <input
                className="form-control"
                type="text"
                name="url"
                id="url"
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="descripcion">Descripcion</label>
              <input
                className="form-control"
                type="text"
                name="descripcion"
                id="descripcion"
                onChange={this.handleChange}
              />
              <br />
            </div>
          </ModalBody>

          <ModalFooter>
            <button
              className="btn btn-success"
              onClick={() => this.postQuery()}
            >
              Insertar
            </button>

            <button
              className="btn btn-danger"
              onClick={() => this.modalInsertHide()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={/*Modal para editar productos*/ this.state.modalEdit}>
          <ModalHeader style={{ display: "block" }}>
            <span
              style={{ float: "right" }}
              onClick={() => this.modalEditHide()}
            >
              x
            </span>
          </ModalHeader>

          <ModalBody>
            <div className="form-group">
              <label htmlFor="idAdorno">ID</label>
              <input
                className="form-control"
                type="text"
                name="idAdorno"
                id="idAdorno"
                onChange={this.handleChange}
                value={form.idAdorno}
                readOnly
              />
              <br />
              <label htmlFor="nombre">Nombre</label>
              <input
                className="form-control"
                type="text"
                name="nombre"
                id="nombre"
                onChange={this.handleChange}
                value={form.nombre}
              />
              <br />
              <label htmlFor="precio">Precio</label>
              <input
                className="form-control"
                type="number"
                name="precio"
                id="precio"
                onChange={this.handleChange}
                value={form.precio}
              />
              <br />
              <label htmlFor="url">Url</label>
              <input
                className="form-control"
                type="text"
                name="url"
                id="url"
                onChange={this.handleChange}
                value={form.url}
              />
              <br />
              <label htmlFor="descripcion">Descripcion</label>
              <input
                className="form-control"
                type="text"
                name="descripcion"
                id="descripcion"
                onChange={this.handleChange}
                value={form.descripcion}
              />
              <br />
            </div>
          </ModalBody>

          <ModalFooter>
            <button className="btn btn-primary" onClick={() => this.putQuery()}>
              Actualizar
            </button>

            <button
              className="btn btn-danger"
              onClick={() => this.modalEditHide()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalDelete}>
          <ModalBody>
            Estás seguro que deseas eliminar {form && form.nombre}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteQuery()}
            >
              Sí
            </button>
            <button
              className="btn btn-secundary"
              onClick={() => this.setState({ modalDelete: false })}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default App;
