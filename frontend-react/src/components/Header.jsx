import {useContext} from "react";
import Button from "./Button";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')
  }
  return(
    <>

      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link href="" className="navbar-brand text-light" to={'/'}>Stock Prediction Portal </Link>

        <div>
          {isLoggedIn ? (
            <button className="btn btn-danger" onClick={handleLogout}>logout</button>
          ): (
          <>
          <Button text="login" class="btn-outline-info" url="/login"/>
          &nbsp;
          <Button text="register" class="btn-info" url="/register"/>
          </>
          )}


        </div>
      </nav>
    
    
    
    </>
  )
}

export default Header;

