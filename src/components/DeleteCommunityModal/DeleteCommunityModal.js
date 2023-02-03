import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function DeleteCommunityModal ({ show, handleShow, handleClose, handleDelete }) {
    const handleClick = () => {
        handleClose()
        handleDelete()
    }

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow}>
        Delete Community
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Community Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this community? This cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outline-warning" onClick={handleClick}>
            Delete Community
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
