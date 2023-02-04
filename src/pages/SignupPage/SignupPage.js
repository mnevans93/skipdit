import SignupForm from '../../components/SignupForm/SignupForm'
import './SignUpPage.scss'

export default function SignupPage ({ setUser, navigate, handleClick }) {
  return (
    <div className='SignUpPage'>
      <SignupForm setUser={setUser} navigate={navigate} handleClick={handleClick} />
    </div>
  )
}
