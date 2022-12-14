import { Fragment } from "react";
import { NavLink, useNavigate, } from 'react-router-dom';
import "./MainNavigation.css";




const MainNavigation = () => {
  const history = useNavigate();

    let isLoggedin = localStorage.getItem('token')

    const logoutHandler = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
         ('/Login')
        window.location.reload()
    } 
    return (
        <Fragment>
            <div className="container">
                <ul className="nav">
                    <li>
                   {isLoggedin &&  <NavLink className="a-link"  to='/'>Home</NavLink> }
                   {!isLoggedin &&   <NavLink className="a-link"  to='/Login'>Home</NavLink>}
                    </li>
                   
                    {!isLoggedin && <li>
                       <NavLink className="a-link"  to="/SignUp">Sign Up</NavLink>
                    </li>  }
                    {!isLoggedin && <li>
                        <NavLink className="a-link"  to="/Login">Login</NavLink>
                    </li> }
                {isLoggedin &&  <li>
                        <span className="a-link" onClick={logoutHandler}>Logout</span>
                    </li> }
                </ul>
            </div>
        </Fragment >
    )
}

export default MainNavigation;