import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.scss'

export default function LoginPage ({ setUser, navigate, handleClick }) {
  return (
    <div className='LoginPage'>
      <LoginForm setUser={setUser} navigate={navigate} handleClick={handleClick} />
    </div>
  )
}
