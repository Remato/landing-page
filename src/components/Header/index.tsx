import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserStore, loginIntent, logout } from '../../store'

function HeaderComponent() {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state: UserStore) => state.user)
  const [headerColor, setHeaderColor] = useState('bg-transparent')
  const [textColor, setTextColor] = useState('text-white')

  const onClickLogin = () => {
    dispatch(loginIntent())
  }

  const onClickLogout = () => {
    dispatch(logout())
  }

  const handleScroll = useCallback(() => {
    if (window.scrollY > 56) {
      setHeaderColor('bg-white')
      setTextColor('text-black')
    } else {
      setHeaderColor('bg-transparent')
      setTextColor('text-white')
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="fixed w-full z-10 text-[24px]">
      <header
        className={`flex ${headerColor} h-[52px] justify-between px-[32px]  items-center`}
      >
        <button className={`${textColor} tracking-wide`}>Menu</button>
        <button className={`${textColor} tracking-wide`}>
          Forsman&Bodenfors
        </button>
        <div>
          <button className={`${textColor} tracking-wide`}>Search</button>
          {isLoggedIn ? (
            <button
              className={`${textColor} tracking-wide ml-8`}
              onClick={onClickLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className={`${textColor} tracking-wide ml-8`}
              onClick={onClickLogin}
            >
              Login
            </button>
          )}
        </div>
      </header>
    </div>
  )
}

export default HeaderComponent
