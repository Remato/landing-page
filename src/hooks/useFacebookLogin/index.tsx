import { useDispatch } from 'react-redux'
import { closeModal, login } from '../../store'

const useFacebookLogin = () => {
  const dispatch = useDispatch()

  function facebookLogin() {
    FB.login(
      function (response: { authResponse?: FacebookAuthResponse }) {
        if (response.authResponse) {
          FB.api('/me', function ({ name, email }: FacebookUserData) {
            dispatch(login({ name, email }))
          })
        } else {
          dispatch(closeModal())
        }
      },
      {
        scope: 'public_profile,email',
      },
    )
  }

  return { facebookLogin }
}

export default useFacebookLogin
