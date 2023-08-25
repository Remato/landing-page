import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { login } from '../../store'

function useGoogleLogin() {
  const dispatch = useDispatch()

  async function handleCallbackResponse({ credential }: GoogleCredential) {
    const { name, email }: DecodedGoogleCredential = await jwtDecode(credential)
    dispatch(login({ name, email }))
  }

  function googleLogout() {
    google.accounts.id.disableAutoSelect()
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: `${import.meta.env.VITE_GOOGLE_CLIENT_ID}`,
      callback: handleCallbackResponse,
    })

    const googleLoginDiv: HTMLElement =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById('google-signin')!

    google.accounts.id.renderButton(googleLoginDiv, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
    })
  })
  return { googleLogout }
}

export default useGoogleLogin
