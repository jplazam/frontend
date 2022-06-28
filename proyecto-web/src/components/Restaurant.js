import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import {
  PostContainer,
  Section,
  Form,
  Comments,
  Rating,
  Head,
} from "./StilizedComponents/RestaurantStyles";
import {
  Label,
  SubmitButton,
  TextArea,
} from "./StilizedComponents/LoginStyles";

import { CommentDelete, RestaurantDelete } from "./Handlers";

export default function Restaurant() {
  // Estos set son peligrosos !!!

  const { id } = useParams();
  const [restaurant, setRestaurant] = React.useState([]);
  const [currentuser, setCurrentuser] = React.useState("empty");
  const [owner, setOwner] = React.useState("empty");
  const [comments, setComments] = React.useState([]);
  const [rating, setRating] = React.useState(0);
  const [tags, setTags] = React.useState([]);

  // error msg from url
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");
  console.log(error);

  React.useEffect(() => {
    axios
      .get("https://g40-web-2022-1-be.herokuapp.com/", {
        withCredentials: true,
      })
      .then((response) => {
        setCurrentuser(response.data);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://g40-web-2022-1-be.herokuapp.com/restaurants/${id}`)
      .then((response) => {
        setRestaurant(response.data.restaurant);
        setOwner(response.data.user);
        setComments(response.data.comments);
        setRating(response.data.ratings);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://g40-web-2022-1-be.herokuapp.com/tags/`)
      .then((response) => {
        setTags(response.data);
      });
  }, []);

  if (comments.length === 0) {
    setComments([{ content: false }]);
  }

  return (
    <Section>
      <PostContainer>
        <Head>
          <div>
            <img className="PostImage" src={restaurant.image} alt=""></img>
          </div>
          <Rating>
            <h1>
              Rating
              <br />
              {rating}
            </h1>
            <Form action={`./${id}/rating/create`} method="post">
              <Label>Rating</Label>
              <br />
              <input name="rating" max="5" min="1" type="number" />
              {error ? (
                <p>Ya calificaste este restaurante</p>
              ) : (
                <SubmitButton type="submit" value="Submit"></SubmitButton>
              )}
            </Form>
          </Rating>
          <div>
            <h2>Reconocimientos</h2>
            <Form action="" method="post">
              {tags.map((tag) => (
                <div>
                  <input
                    type="checkbox"
                    id={tag.id}
                    name={tag.content}
                    value={tag.content}
                  ></input>
                  <label for={tag.content}> {tag.content}</label>
                  <br></br>
                </div>
              ))}

              <SubmitButton
                type="submit"
                value="Entregar reconocimiento"
              ></SubmitButton>
            </Form>
          </div>
        </Head>
        <h1>{restaurant.title}</h1>
        <p>Dueño: {owner.name}</p>
        <h3>{restaurant.description}</h3>
        {currentuser.isAdmin || currentuser.id === owner.id ? (
          <a href="./">
            <button onClick={() => RestaurantDelete(id)}>
              Borrar restaurante
            </button>
          </a> // !!! Añadir auth
        ) : null}
      </PostContainer>

      <div className="Comentarios">
        <div>
          <Comments>
            <div>
              <h1>Comentarios</h1>
              {
                // check if comments is empty
                comments.map((comment) =>
                  comment.content !== false ? (
                    <div>
                      <p>{comment.content}</p>
                      <p>{comment.createdAt}</p>
                      {currentuser.isAdmin ? (
                        <button onClick={() => CommentDelete(id, comment.id)}>
                          Borrar comentario
                        </button>
                      ) : null}
                    </div>
                  ) : (
                    <p>No comments</p>
                  )
                )
              }
            </div>
            <div>
              {currentuser !== "empty" ? (
                <Form action={` ./${id}/comment/create`} method="post">
                  <div>
                    <h4>Leave a comment</h4>
                    <Label>Message</Label>
                    <TextArea cols="30" rows="5" name="content"></TextArea>
                  </div>
                  <div>
                    <SubmitButton
                      type="submit"
                      value="Subir comentario"
                    ></SubmitButton>
                  </div>
                </Form>
              ) : (
                <div>
                  <h1>Por favor inicia sesión para comentar</h1>
                </div>
              )}
            </div>
          </Comments>
        </div>
      </div>
    </Section>
  );
}
