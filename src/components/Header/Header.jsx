import './styles.css';
import { BsCart } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { BsListNested } from 'react-icons/bs';

const Header = () => {
    return(
        <header className="container">
            <div id="logo">GREENMIND</div>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
            <div id="logandcart">
            <BsCart />
            <AiOutlineUser />
            |
            <BsListNested />
            </div>
        </header>
    )
}

export default Header;