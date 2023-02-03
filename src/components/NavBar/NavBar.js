import { useState, useEffect } from 'react'
import { logOut } from '../../utilities/users-service'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function NavBar ({ user, setUser, page, link, setLink, navigate, handleClick }) {
  const [subSkipdits, setSubSkipdits] = useState([])

  useEffect(() => {
    if (link) navigate(link)
  }, [link])

  const getSubs = () => {
    if (user) {
      setSubSkipdits(user.subSkipdits.map(subSkipdit =>
        <NavDropdown.Item key={subSkipdit._id} href={`/subSkipdits/${subSkipdit._id}`} onClick={(e) => handleClick(e, `/subSkipdits/${subSkipdit._id}`)}>{subSkipdit.nickname}</NavDropdown.Item>)
    )}
  }

  useEffect(() => {
    // getSubs()
  }, [user])

  const handleLogout = (e) => {
    e.preventDefault()
    logOut()
    setUser(null)
    setLink('/')
  }

  return (
    <div className='main-nav'>
      <Navbar fixed="top" bg='secondary' expand='false' className='mb-3' collapseOnSelect='true'>
        <Container fluid>
          <Navbar.Brand><Nav.Link href='/' onClick={(e) => handleClick(e, '/')}>skipdit</Nav.Link></Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-expand' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-expand'
            aria-labelledby='offcanvasNavbarLabel-expand-expand'
            placement='end'
            bg='secondary'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-expand'>
                {user ? user.username : 'Login or Sign Up Below'}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='/' onClick={(e) => handleClick(e, '/')}>Explore Communities</Nav.Link>
                {/* {user ? <Nav.Link href='/dashboard' onClick={(e) => handleClick(e, '/dashboard')}>My Dashboard</Nav.Link> : ''} COMMENTING THIS OUT FOR NOW */}
                {user ? <NavDropdown
                  title='My Communities'
                  id='offcanvasNavbarDropdown-expand-expand'
                >
                  {subSkipdits}
                  <hr />
                  <NavDropdown.Item href='/s/new' onClick={(e) => handleClick(e, '/s/new')}>Start a New Community</NavDropdown.Item>
                </NavDropdown> : ''}
                {user ? 
                  <>
                    <Nav.Link href={`/users/${user._id}`} onClick={(e) => handleClick(e, `/users/${user._id}`)}>User Options</Nav.Link>
                    <Nav.Link href='/' onClick={(e) => handleLogout(e)}>Logout</Nav.Link>
                  </>
                :
                  <>
                    <Nav.Link href='/login' onClick={(e) => handleClick(e, '/login')}>Login</Nav.Link>
                    <Nav.Link href='/signup' onClick={(e) => handleClick(e, '/signup')}>Sign Up</Nav.Link>
                  </>
                }
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}