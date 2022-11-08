import { BiHome } from 'react-icons/bi';
import { Link } from 'react-router-dom';
// CSS
import '../styles/navbar.css';
function Navbar() {
  return (
    <Link to='/'>
      <BiHome className='home' />
    </Link>
  );
}

export default Navbar;
