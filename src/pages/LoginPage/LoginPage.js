import LoginForm from '../../components/LoginForm/LoginForm'

export default function LoginPage ( {setUser, navigate, handleClick} ) {
  return (
    <LoginForm setUser={setUser} navigate={navigate} handleClick={handleClick} />
  )
}
