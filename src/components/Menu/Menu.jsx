import { NavLink } from 'react-router-dom';
import './Menu.scss'
const Menu = () => {
    return(
        <div className='menu'>
          <ul className="menu-list">
              <li className="menu-list-item">
                  <NavLink to="/" className='link'><div className="link-name">Home</div></NavLink>
              </li>
              <li className="menu-list-item">
                  <NavLink to="/restaurant" className='link'><div className="link-name">Restaurants</div></NavLink>
              </li>
              <li className="menu-list-item">
                  <NavLink to="/branch" className='link'><div className="link-name">Branches</div></NavLink>
              </li>
              <li className="menu-list-item">
                  <NavLink to="/meal" className='link'><div className="link-name">Meals</div></NavLink>
              </li>
          </ul>
        </div>
    )
}
export default Menu;