import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className='bg-stone-300'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/Yourcalendar'>   
            <h1 className='font-bold'>Your Calendar</h1>
            </Link>
            <ul>
                <Link to='/Profile'>
                <li>Profile</li>
                </Link> 
            </ul>
        </div>    
    </div>
  )
}
