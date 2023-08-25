import { useEffect, useState } from 'react'

function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [randomColor, setRandomColor] = useState('')

  const colors = [
    'var(--brown)',
    'var(--green)',
    'var(--orange)',
    'var(--pink)',
  ]

  useEffect(() => {
    const updateCursorPosition = ({ pageX, pageY, target }: MouseEvent) => {
      const cursor = document.querySelector('.cursor') as HTMLElement
      cursor.style.left = `${pageX}px`
      cursor.style.top = `${pageY}px`
      cursor.setAttribute(
        'data-fromTop',
        `${cursor.offsetTop - window.scrollY}px`,
      )

      const elementsWithHover = document.querySelectorAll(
        'iframe, button, a, img, video',
      )
      const cursorOverElement = Array.from(elementsWithHover).some((element) =>
        element.contains(target as Node),
      )
      setIsHovering(cursorOverElement)
    }

    document.addEventListener('mousemove', updateCursorPosition)

    const updateCursorOnScroll = () => {
      const cursor = document.querySelector('.cursor') as HTMLElement
      const fromTop = cursor.getAttribute('data-fromTop') || '0'
      cursor.style.top = `${window.scrollY + parseInt(fromTop)}px`
    }

    window.addEventListener('scroll', updateCursorOnScroll)

    const elementsWithHover = document.querySelectorAll(
      'iframe, button, a, img, video',
    )
    elementsWithHover.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      window.removeEventListener('scroll', updateCursorOnScroll)
      elementsWithHover.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  })

  const handleMouseEnter = () => {
    setIsHovering(true)

    const randomIndex = Math.floor(Math.random() * colors.length)
    setRandomColor(colors[randomIndex])
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setRandomColor('')
  }

  return (
    <div
      className={`cursor${isHovering ? ' hover-pointer' : ''}`}
      style={{ background: randomColor }}
    ></div>
  )
}
export default CustomCursor
