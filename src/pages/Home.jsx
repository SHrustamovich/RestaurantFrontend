import './Home.scss'
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Branches from "../components/Branches/Branches";
import Main from "../components/Main/Main";
import Meals from "../components/Meals/Meals";
import Menu from "../components/Menu/Menu";
import Restaurant from "../components/Restaurant/Restaurant";
import Header from "../components/Header/Header"

const Home = () => {
    return (
       <div>
           <Header/>
            <div className='home'>
         <div className="home-menu">
         <Menu/>
         </div>
        <div className="home-right">
        <Switch>
             <Route path="/" exact>
                    <Main/>
             </Route>
             <Route path="/restaurant">
                 <Restaurant/>
                 </Route>
             <Route path="/branch">
              <Branches/>
             </Route>
             <Route path="/meal"> 
               <Meals/>
             </Route>
         </Switch>
        </div>
        </div>
       </div>
    )
}
export default Home;