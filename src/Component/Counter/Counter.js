import { useState } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)

  return (
    <div className='relative w-20 h-20'>
      <button
        onClick={increment}
        className='w-full h-full text-slate-800 active:text-rose-800 hover:text-rose-500 bg-slate-200 hover:bg-rose-200 flex justify-center items-center text-3xl rounded-lg btnCounter'
      >
        <BsFillHeartFill />
      </button>
      <p className='counter'>{count}</p>
    </div>
  )
}
