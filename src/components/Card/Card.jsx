import React from "react";

const Card = ({ users }) => {




  return (
    <div>
      {users.map((user) => (
        <div>
          <figure data-name={user.first_name}>
            <img
              src={user.avatar}
              alt={user.first_name}
            />

            <div>
              <h2>{user.first_name} {user.last_name}</h2>
              <address>{user.email} </address>
            </div>
            <button onClick={() => alert(`Hello I'm ${user.first_name}`) }>
              Greeting{" "}
              <span aria-label="greeting" role="img">
                {" "}
                ✋{" "}
              </span>
            </button>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Card;
