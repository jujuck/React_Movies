import React from 'react';
import Modal from 'react-modal';

/** Import du css */
import './Message.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '15px',
    textAlign: 'center',
  },
};
const Message = ({
  title,
  description,
  buttonAction = false,
  confirmation,
}) => {
  return (
    <Modal isOpen={confirmation} style={customStyles}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {buttonAction && (
          <button
            className="popupBtn"
            type="submit"
            onClick={() => buttonAction(true)}
          >
            Valider
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Message;
