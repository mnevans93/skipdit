import { useState, useEffect } from 'react'
import { logOut } from '../../utilities/users-service'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function NavBar ({ user, setUser, page, link, setLink, navigate, handleClick }) {
  const [subSkipdits, setSubSkipdits] = useState(user.subSkipdits.map(subSkipdit =>
    <NavDropdown.Item key={subSkipdit._id} href={`/subSkipdits/${subSkipdit._id}`} onClick={(e) => handleClick(e, `/subSkipdits/${subSkipdit._id}`)}>{subSkipdit.nickname}</NavDropdown.Item>
  ))

  useEffect(() => {
    navigate(link)
  }, [link])

  useEffect(() => {
    setSubSkipdits(user.subSkipdits.map(subSkipdit =>
      <NavDropdown.Item key={subSkipdit._id} href={`/subSkipdits/${subSkipdit._id}`} onClick={(e) => handleClick(e, `/subSkipdits/${subSkipdit._id}`)}>{subSkipdit.nickname}</NavDropdown.Item>
    ))
  }, [user])

  const handleLogout = (e) => {
    e.preventDefault()
    logOut()
    setUser(null)
    setLink('/welcome')
  }

  return (
    user
      ? <div className='main-nav'>
        <Navbar fixed="top" bg='primary' expand='false' className='mb-3' collapseOnSelect='true'>
          <Container fluid>
            <Navbar.Brand>{page}</Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-expand' />
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-expand'
              aria-labelledby='offcanvasNavbarLabel-expand-expand'
              placement='end'
              bg='primary'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-expand'>
                  {user.name}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <hr />
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link href='/dashboard' onClick={(e) => handleClick(e, '/dashboard')}>My Dashboard</Nav.Link>
                  <NavDropdown
                    title='My Stuff'
                    id='offcanvasNavbarDropdown-expand-expand'
                  >
                    {subSkipdits}
                    <hr />
                    <NavDropdown.Item href='/subSkipdits/new' onClick={(e) => handleClick(e, '/subSkipdits/new')}>Add a new account</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href='/options' onClick={(e) => handleClick(e, '/options')}>User Options</Nav.Link>
                  <Nav.Link href='/welcome' onClick={(e) => handleLogout(e)}>Logout</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
      : ''
  )
}