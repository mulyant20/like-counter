import { useEffect, useState } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const increment = () => {
    setCount((prev) => prev + 1)
    setIsActive(true)
  }

  useEffect(() => {
    if(!isActive) {
      return
    }

    let timeout = setTimeout(() => {
      setIsActive(false)
    }, 1400)
    
    return () => clearTimeout(timeout)
  }, [isActive])

  return (
    <div className='relative w-20 h-20'>
      <button
        onClick={increment}
        className='w-full h-full text-slate-800 active:text-rose-800 hover:text-rose-500 bg-slate-200 hover:bg-rose-200 flex justify-center items-center text-[2.5rem] rounded-[14px] duration-150 ease-in active:scale-75 btnCounter'
      >
        <BsFillHeartFill />
      </button>
      <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-8 bg-white flex items-center justify-center rounded-full -z-[1] duration-150 ease-out bg-rose-600 text-white text-xl ${isActive ? '-top-1/2' : 'top-1/2'}`}>
        <p className='counter'>{count}</p>
      </div>
    </div>
  )
}
