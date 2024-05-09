import React from "react";
import "./index.scss";
import owner from "../../assets/owner.jpg";

const MessageOwner = () => {
  return (
    <section>
      <div className="owner-container">
        <div className="overlay"></div>
        <div className="owner-text">
          <h1>A message from our owner</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis porro
            delectus quasi nam ducimus quod sequi incidunt impedit veniam nihil?
            Eligendi at accusantium deleniti iusto veritatis minima fugit.
            Saepe, modi autem quo quisquam reprehenderit, eius explicabo vitae,
            earum dolorem placeat est. Enim, quam illo? Ipsam dolore libero
            delectus aliquam nostrum quaerat reiciendis expedita at odio,
            dolores blanditiis harum dolorem atque dignissimos fuga facilis a
            unde, maxime voluptatum? Perspiciatis deleniti voluptates cum
            excepturi quo consequuntur magni quibusdam impedit earum non! Quia
            sapiente expedita dolore quam voluptatum recusandae ullam deserunt
            est, consequatur corrupti impedit optio, non ducimus! Eveniet
            tempora accusamus soluta nemo.
          </p>
        </div>
        <div className="owner-img">
          <img src={owner} alt="owner" />
        </div>
      </div>
    </section>
  );
};

export default MessageOwner;
