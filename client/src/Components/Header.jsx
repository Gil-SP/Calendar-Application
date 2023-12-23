import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-stone-300'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/your-calendar'>
          <h1 className='font-bold'>Your Calendar</h1>
        </Link>
        <ul className='flex gap-4'>
        {location.pathname !== '/sign-in' && ( // Check if the current route is not '/sign-in'
            <Link to='/your-calendar'>
              <li>Home</li>
            </Link>
          )}
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
