


import React, { useState } from "react";
import "./style/Card.css";
import { Button, ButtonGroup } from "@chakra-ui/react";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fa fa-star ${i < rating ? "checked" : "unchecked"}`}
      ></i>
    );
  }
  return stars;
};

const Card = ({ data, cartCount, setCartCount }) => {
  const [status, setStatus] = useState(data.map(() => true));

  const addCart = (index) => {
    setCartCount(cartCount + 1);
    setStatus(status.map((s, i) => (i === index ? false : s)));
  };

 

  return (
    <div className="container">
      {data.map((item, index) => (
        <div className="col" key={index}>
          <div className="card">
            <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title fw-bolder">{item.title}</h5>
              <p className="card-text">{item.price}</p>
              {item.reviews === "True" ? (
                <div className="reviews">{renderStars(item.rating)}</div>
              ) : (
                <div className="no-reviews">No reviews</div>
              )}

              <div className="text-center" style={{ marginTop: "36px" }}>

                <Button
                  onClick={() => addCart(index)}
                   colorScheme="teal"
                  variant="solid"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

