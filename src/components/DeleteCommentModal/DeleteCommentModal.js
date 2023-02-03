import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function DeleteCommentModal ({ show, handleShow, handleClose, handleDelete }) {
    const handleClick = () => {
        handleClose()
        handleDelete()
    }

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        DELETE COMMENT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comment Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this comment? This cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={handleClick}>
            DELETE COMMENT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
