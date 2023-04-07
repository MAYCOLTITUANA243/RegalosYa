import "../App.css";
import React, { useState, useEffect,useCallback  } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Facebook from '../img/facebook.webp';
import Tiktok from '../img/tiktok.png';
import Whatsapp from '../img/whatsapp.png';
import Instagram from '../img/instagram.webp';
import Google from '../img/google.webp';
import Domicilio from '../img/domicilio.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table
} from "reactstrap";


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
const comprarRegalo = () => {
    const phoneNumber = '+593997676831';
    const message = 'Hola, necesito más información sobre los productos de Regalos Ya.\n'; 

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url);
};

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
    const classes = useStyles();
  return (
    
    <div>
      <React.Fragment>
      <CssBaseline />
      <main>
      <Container className="container" style={{ display: 'flex', flexDirection: 'row' }}>
        <Table >
            <tbody>
              <tr>
                <td style={{verticalAlign: 'top' }}>
                  <h1 style={{textAlign:'center'}}>Tienda de Regalos</h1>
                  <Typography variant="body2" color="textSecondary" align="justify">
                  <p>
                  La vida se resume en momentos de alegría y mucha felicidad. Gracias por dejarnos formar parte de un recuerdo inolvidable lleno de amor     
                  </p>
                  <p >Con Regalos Ya  encontrarás todos los arreglos para todo tipo de eventos como:</p>
                  <p>- Matrimonios</p>
                  <p>- Bautizos</p>
                  <p>- Fiesta de revelación</p>
                  <p>- 15 años y mucho más.</p>
                  <p>Contamos con entrega a domicilio</p>
                  <p>Ven y visítanos estamos en el sector de la Mariana de Jesús en Inglaterra o solicita mayor información al 0997676831 o en nuestras redes sociales.</p>
                  <p>Te esperamos....</p>
                  </Typography>
                </td>
                <td>
                <Carousel style={{height:'500px',maxWidth:'400px'}} interval={null} className="carousel slide" data-ride="carousel">
                    <Carousel.Item>
                        <img
                        style={{ objectFit: "cover",height:'500px',maxWidth:'100%'}}
                        src="https://scontent.fuio25-1.fna.fbcdn.net/v/t39.30808-6/335892689_535234088743185_2153801926121724365_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFCgAkfEElsj_38BlhNU2OjC3H8LKFSkoELcfwsoVKSgSv_1q0pCP2odlut_hdLJQK90yF_R9KVD1fI1lOOYUix&_nc_ohc=2eh9ycyDgKgAX-dJyNa&_nc_ht=scontent.fuio25-1.fna&oh=00_AfDrbXxEYucn99ZGruqqiqAbdwsyWcsWstapLWk6jcfNlg&oe=6432E496"
                        alt="First slide"
                        
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        style={{ objectFit: "cover", height:'500px',maxWidth:'100%'}}
                        src="https://scontent.fuio25-1.fna.fbcdn.net/v/t39.30808-6/335920288_892563985341993_6890825777452700903_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEiXCJaBUIXv9D9DDYZLzmNQeKo596a5hRB4qjn3prmFKjAS4-FbzcsnVL9phILUOBlMdh3cBL7Ng64yot1cpf4&_nc_ohc=s5iKH8NsCdwAX8m72qe&_nc_oc=AQmVBO8t3CLLAgBzImhll-_HLipSmoHB1PaoXfLIzKr7gexrBuobhdgxV_vyFu3kifM&_nc_ht=scontent.fuio25-1.fna&oh=00_AfAlWi9vajfFlp8am6WFUgaLzeio-W8BA2sK1QSpgKu_tw&oe=6432891C"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        style={{ objectFit: "cover", height:'500px',maxWidth:'100%'}}
                        src="https://scontent.fuio25-1.fna.fbcdn.net/v/t39.30808-6/335620045_724424212408857_5013622514649127882_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE4ijjIyhdltgS4FAy7x2U3K2_kF2JYzHkrb-QXYljMefHqDrsNavO6p_ecGFs_PbKJ9wyRu_tyOh5QfUlcWM2U&_nc_ohc=Y82B4gIWH74AX_jlVQ9&_nc_ht=scontent.fuio25-1.fna&oh=00_AfDvk1tKt53O7cYqF1V3OyPG5C-DlnjF62275653tiyIxA&oe=643331D0"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                  </Carousel>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        
        
      </main>
      <main style={{  background:"#E0E0E0"}}>
      <Container className="container" style={{ display: 'flex', flexDirection: 'row' }}>
      <Table >
            <tbody>
              <tr>
                <td style={{verticalAlign: 'top' }}>
                  <Typography variant="body2" color="textSecondary" align="center"> 
                      <h2>Entrega a domicilio</h2>
                      <img src={Domicilio} style={{width:"150px", height:"100px"}}></img>
                      <p>Entregas a toda la cuidad de Quito</p>
                  </Typography>
                </td>
                <td style={{verticalAlign: 'top' }}>
                <Typography variant="body2" color="textSecondary" align="center">     
                        <h2>Dirección</h2>
                        <p>Av. Mariana de Jesús</p>
                        <p>Quito-Ecuador</p>
                        <a href="https://maps.app.goo.gl/MpX66dGGNfXYUrpSA">
                        <p>Google Maps</p>
                        <img src={Google} alt="Descripción de la imagen" 
                        style={{
                        alignContent:'center',
                        width: '50px',
                        height: '50px',
                        }}/>
                        </a>
                      </Typography>
                </td>
                <td style={{verticalAlign: 'top' }}>
                  <Typography variant="body2" color="textSecondary" align="center">
                    <h2>Contactos</h2>
                    <a href="https://www.facebook.com/RegalosYaConAmor">
                    <img src={Facebook} alt="Descripción de la imagen" 
                    style={{
                    alignContent:'center',
                    width: '55px',
                    height: '55px',
                    }}/>
                    </a>
                    <a href="https://www.instagram.com/regalos_ya_quito/?igshid=ZDdkNTZiNTM%3D">
                    <img src={Instagram} alt="Descripción de la imagen" 
                    style={{
                    alignContent:'center',
                    width: '37px',
                    height: '37px',
                    }}/>
                    </a>
                    <a href="https://www.tiktok.com/@regalos.ya.2022?_t=8bFHJIoUljq&_r=1"
                    style={{ marginLeft: "8px" }}
                    >
                    <img src={Tiktok} alt="Descripción de la imagen" 
                    style={{
                    alignContent:'center',
                    width: '35px',
                    height: '35px',
                    }}/>
                    </a>
                    <img src={Whatsapp} alt="Descripción de la imagen"
                    onClick={comprarRegalo} 
                    style={{
                    marginLeft: "5px", 
                    alignContent:'center',
                    width: '45px',
                    height: '45px',
                    }}/>
                  </Typography>
                </td>
              </tr>
            </tbody>
            
          </Table>
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
