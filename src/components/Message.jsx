import React from 'react';

/** Import du css */
import './Message.css';

const Message = ({ title, description, buttonAction = false }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {buttonAction && (
        <>
          <button
            className="popupBtn"
            type="submit"
            onClick={() => buttonAction(true)}
          >
            Valider
          </button>
          <button
            className="popupBtn"
            type="submit"
            onClick={() => buttonAction(false)}
          >
            Annuler
          </button>
        </>
      )}
    </div>
  );
};

export default Message;
