import './NotFound.css'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, 5000)

  return (
    <div className='not-found'>
      <h1>404</h1>
      <h3>This page was not found</h3>
      <h3>We will redirect you in 5 seconds...</h3>
    </div>
  );
}

export default NotFound;
