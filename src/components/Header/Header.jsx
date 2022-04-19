import './Header.scss'
import AdminImg from '../../lib/image/restaurant.png'
const Headers = () => {
    return (
        <div className="header">
            <div><img src={AdminImg} alt="" className="header-img" width={45} height={45}/></div>
            <h1 className="header-h1">Admin page</h1>
        </div>
    )
}
export default Headers;