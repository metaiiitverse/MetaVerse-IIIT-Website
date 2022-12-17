import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({modalIsOpen: true});
    }, 2000);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <h1>Please Register</h1>
          {/* <div className="modal">
            <button className="modal-close" onClick={this.closeModal}>
              close
            </button>
            <h2 className="modal-title">Register</h2>
            <form className="modal-form">
              <label className="modal-form-label" htmlFor="name">
                Name:
              </label>
              <input
                className="modal-form-input"
                type="text"
                name="name"
                id="name"
                required
              />
              <label className="modal-form-label" htmlFor="email">
                Email:
              </label>
              <input
                className="modal-form-input"
                type="email"
                name="email"
                id="email"
                required
              />
              <button className="modal-form-button" type="submit">
                Submit
              </button>
            </form>
          </div> */}
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;
