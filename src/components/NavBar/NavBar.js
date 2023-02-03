import { useState, useEffect } from 'react'
import { logOut } from '../../utilities/users-service'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

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
      <Navbar bg="light" variant="light">
        <Container className='NavBarContainer'>
          <Navbar.Brand className='logo' href="/">skipdit</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href='/' onClick={(e) => handleClick(e, '/')}>Explore Communities</Nav.Link>
          <Nav.Link href='/s/new' onClick={(e) => handleClick(e, '/s/new')}>Create Community</Nav.Link>
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
        </Container>
      </Navbar>
    </div>
  )
}