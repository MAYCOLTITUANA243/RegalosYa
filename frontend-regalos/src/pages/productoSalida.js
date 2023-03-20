import React, { useState, useEffect,useCallback  } from "react";
import axios from "axios";
//import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
//import { Modal } from '@material-ui/core';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Regalos Ya
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: "90%",
    maxHeight: "90%",
    objectFit: "contain",
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  imageModal: {
    maxWidth: '50%',
    maxHeight: '50%',
  },
}));

function App() {

  const [selectedImage, setSelectedImage] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [modal, setModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = useCallback(() => {
    if (!isModalOpen) {
      setModal(!modal);
      setIsModalOpen(true);
    }
  }, [isModalOpen, modal]);

  const handleClose = useCallback(() => {
    setModal(false);
    setIsModalOpen(false);
  }, []);

  const guardarDatos = (url,nombre,precio) => {
    setSelectedImage(url);
    setNombre(nombre);
    setPrecio(precio);
    toggle();
  };

  const comprarRegalo = () => {
    const phoneNumber = '+593987819155';
    const message = 'Hola, me gustaria tener informacion sobre:\n'; 

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message+nombre+"\n"+selectedImage+"\n"+precio)}`;
    window.open(url);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const classes = useStyles();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://regalos-ya1-1ncf.vercel.app/api/adorno");
        setData(response.data.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    
    <div>
      <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid item key={classes.card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    onClick={() => guardarDatos(item.url,item.nombre,item.precio)}
                    image={item.url}
                    title="Image title"
                  />

                   <Modal isOpen={modal} toggle={handleClose}>
                    <ModalHeader toggle={handleClose} className="text-center"><div  className="d-flex justify-content-center" >{nombre}</div> </ModalHeader>
                    <ModalBody>
                    <div className={classes.imageContainer}>
                      <img className={classes.imageModal} src={selectedImage} alt="Imagen" />
                    </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={()=>comprarRegalo()}>Comprar</Button>
                      <Button color="secondary" onClick={()=>handleClose()}>Cerrar</Button>
                    </ModalFooter>
                  </Modal>

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.nombre}
                    </Typography>
                    <Typography>
                      {item.descripcion}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      ${item.precio}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={()=>comprarRegalo()}>
                      Comprar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Regalos Ya
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Deja que el amor fluya!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
    </div>
  );
}

export default App;
