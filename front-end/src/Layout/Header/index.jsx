import { Link } from "react-router-dom"
import styles from './index.module.scss'
const Header = () => {
  return (
    <>
    
      <div className={`container ${styles.nav}`}>
        <div><h1>Selling</h1></div>
        <div>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>Products</Link></li>
            <li><Link to={"/"}>About Us</Link></li>
            <li><Link to={"/"}>Special</Link></li>
            <li><Link to={"/add-item"}>Add Item</Link></li>
            <li><Link to={"/basket"}>Basket</Link></li>
              </ul></div>
      </div>
    </>
  )
}

export default Header
