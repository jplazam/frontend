import React from "react";
import axios from "axios";

function RestaurantDelete(id) {
  axios.delete(
    `https://g40-web-2022-1-be.herokuapp.com/restaurants/delete/${id}`
  );
}

function CommentDelete(restaurant_id, id) {
  axios.delete(
    `https://g40-web-2022-1-be.herokuapp.com/restaurants/${restaurant_id}/comment/delete/${id}`
  );
  // refresh page
  window.location.reload();
}

export { RestaurantDelete, CommentDelete };
