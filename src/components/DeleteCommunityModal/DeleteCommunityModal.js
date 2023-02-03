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
        DELETE COMMUNITY
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Community Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this community? This cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="outline-warning" onClick={handleClick}>
            DELETE COMMUNITY
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
