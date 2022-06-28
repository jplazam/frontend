import React from "react";
import axios from "axios";

import "../Css/Restaurants.css";

import { Link } from "react-router-dom";
import {
  Body,
  Card,
  Box,
  Container,
  Content,
} from "./StilizedComponents/RestaurantsStyles";

export default function Restaurants() {
  const [restaurants, setRestaurants] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://g40-web-2022-1-be.herokuapp.com/restaurants")
      .then((response) => {
        setRestaurants(response.data);
      });
  }, []);

  return (
    <Body>
      <Container>
        {restaurants.map((post) => (
          <Card key={post.id}>
            <div className="Post">
              <Box>
                <Content>
                  <div>
                    <img className="PostImage" src={post.image} alt=""></img>
                  </div>
                  <div>
                    <h3>{post.name}</h3>
                  </div>
                  <Link to={`/restaurants/${post.id}`}>Ver</Link>
                </Content>
              </Box>
            </div>
          </Card>
        ))}
      </Container>
    </Body>
  );
}
