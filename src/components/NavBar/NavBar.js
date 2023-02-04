import { useState, useEffect } from 'react'
import { logOut } from '../../utilities/users-service'
import './NavBar.scss'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavBar ({ user, setUser, link, setLink, navigate, handleClick }) {
  const [dropdownSubs, setDropdownSubs] = useState(null)

  useEffect(() => {
    if (link) navigate(link)
  }, [link])

  useEffect(() => {
    if (!user) return
    const items = user.subSkipdits.map((el) =>
      <NavDropdown.Item key={el._id} href={`/s/${el._id}`} onClick={(e) => handleClick(e, `/s/${el._id}`)}>{el.subName}</NavDropdown.Item>
    )
    items.length ? setDropdownSubs(items) : setDropdownSubs(null)
  }, [user])

  const handleLogout = (e) => {
    e.preventDefault()
    logOut()
    setUser(null)
    setLink('/')
  }

  return (
    <div className='main-nav'>
      <Navbar bg='light' variant='light'>
        <Container className='NavBarContainer'>
          <Navbar.Brand className='logo' href='/' onClick={(e) => handleClick(e, '/')}>skipdit</Navbar.Brand>
          <div>
            <Nav className='me-auto'>
              <Nav.Link href='/' onClick={(e) => handleClick(e, '/')}>Explore Communities</Nav.Link>
              {user
                ? <>
                  <Nav.Link href='/s/new' onClick={(e) => handleClick(e, '/s/new')}>Create a Community</Nav.Link>
                  <NavDropdown title='Your Communities' id='navbarScrollingDropdown'>
                    {dropdownSubs || <NavDropdown.Item>None yet!</NavDropdown.Item>}
                  </NavDropdown>
                  <Nav.Link href='/' onClick={(e) => handleLogout(e)}>Logout</Nav.Link>
                </>
                : <>
                  <Nav.Link href='/login' onClick={(e) => handleClick(e, '/login')}>Login</Nav.Link>
                  <Nav.Link href='/signup' onClick={(e) => handleClick(e, '/signup')}>Sign Up</Nav.Link>
                </>}
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
