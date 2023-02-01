import SignupForm from '../../components/SignupForm/SignupForm'

export default function SignupPage ( {setUser, navigate, handleClick} ) {
  return (
    <SignupForm setUser={setUser} navigate={navigate} handleClick={handleClick} />
  )
}
