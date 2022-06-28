// Dependencias generales
import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Link,
} from "react-router-dom";

// Estilos
//import "../Css/Cards_landing.css";
import {
  Body,
  Card,
  Box,
  Container,
  Content,
} from "./StilizedComponents/CardsLandingStyles";

import { GlobalStyle } from "./StilizedComponents/AppStyles";

export default function Home() {
  return (
    <Body>
      <Container>
        <Card>
          <Box>
            <Content>
              <h2>01</h2>
              <h3>Distintos tipos de usuarios</h3>
              <p>
                <li>Administrador</li>
                <br></br>
                <li>Usuario no registrado</li>
                <br></br>
                <li>Usuario registrado</li>
                <br></br>
                <li>Dueño</li>
              </p>
            </Content>
          </Box>
        </Card>

        <Card>
          <Box>
            <Content>
              <h2>02</h2>
              <h3>Restaurantes</h3>
              <p>
                Los usuarios y dueños de restaurantes pueden añadir negocios
                para ayudar a la comunidad
              </p>
              <Link to="/restaurants">Ver más</Link>
            </Content>
          </Box>
        </Card>

        <Card>
          <Box>
            <Content>
              <h2>03</h2>
              <h3>Comunidad</h3>
              <p>
                La comunidad se alimenta a si misma, dando feedback sobre los
                restaurantes y actualizando la información
              </p>
            </Content>
          </Box>
        </Card>
      </Container>
    </Body>
  );
}
