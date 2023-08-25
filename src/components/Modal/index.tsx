import { useDispatch, useSelector } from 'react-redux'
import { UserStore, closeModal } from '../../store'
import { MdClose } from 'react-icons/md'
import { useFacebookLogin, useGoogleLogin } from '../../hooks/'

function LoginModal() {
  useGoogleLogin()
  const { facebookLogin } = useFacebookLogin()

  const { isOpenedModal } = useSelector((state: UserStore) => state.user)

  const dispatch = useDispatch()
  const onClose = () => dispatch(closeModal())

  const visibility = isOpenedModal ? 'visible' : 'invisible'

  return (
    <div>
      <div
        className={`${visibility} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
      >
        <div className="bg-white p-8 rounded shadow-lg">
          <div className="flex justify-end" onClick={onClose}>
            <div className="p-2 hover:opacity-70">
              <MdClose />
            </div>
          </div>
          <h2 className="text-md font-bold mb-4 text-center">Connect with</h2>
          <div>
            <a>
              <div id="google-signin"></div>
            </a>
          </div>

          <div onClick={facebookLogin}>
            <a className="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-sm text-center bg-blue-500 text-white transition-colors duration-200 transform border rounded-lg dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <span className="text-sm text-white">Login with Facebook</span>
            </a>
          </div>

          <h3 className="py-1 text-center opacity-30">or</h3>
          <form>
            <input
              type="text"
              placeholder="E-mail"
              className="block w-full px-4 py-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="block w-full px-4 py-2 mb-4 border rounded"
            />
            <button
              type="submit"
              className="bg-black hover:opacity-70 text-white font-bold py-2 px-4 rounded w-full"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginModal
