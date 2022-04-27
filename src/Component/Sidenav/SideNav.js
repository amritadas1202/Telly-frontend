import React ,{useState,} from 'react'
import { LeftListing } from './SideList'
import './SideNav.css'
import { Link } from "react-router-dom";

const SideNav = () => {
    const [toggle, setToggle] = useState(true);
    const [prof, setProf] = useState(false);
  
    const OpenToggle = () => {
      if (toggle === false) {
        setToggle(true);
        localStorage.removeItem("width");
        localStorage.setItem("width", toggle);
      } else {
        setToggle(false);
        localStorage.removeItem("width");
        localStorage.setItem("width", toggle);
      }
    };
  
    const ProfTig = () => {
      if (prof === false) {
        setProf(true);
      } else {
        setProf(false);
      }
    };
  
    
  
    return (
      <div  className={toggle ? "expander" : "l-navbar"} id="navbar">
       
  
        <div className="nav__list">
          <div className="nav__top-head " onClick={OpenToggle}>
            {toggle ? (
              <>
                <span className="material-icons nav_icon_main exp">
                  arrow_forward_ios
                </span>
              </>
            ) : (
              <span class="material-icons">
                arrow_back_ios
              </span>
            )}
  
            <span className={toggle ? "nav_title_main" : "nav_title_main"}>
              Close
            </span>
          </div>
  
          <div className="nav_profile_div">
            <div className="prof_icon">
              <span className="material-icons nav_icon_main" onClick={ProfTig}>
                account_circle
              </span>
            </div>
  
            <div className="profileDrop">
              <div className="profDeta" onClick={ProfTig}>
                <span className="prof_tit_main">Rahul Bose</span>
                {/* {prof ? (
                  <span className="material-icons down_prof exp">
                    expand_less
                  </span>
                ) : (
                  <span className="material-icons down_prof collapse">
                    expand_more
                  </span>
                )} */}
              </div>
              {/* {prof ? (
                <div className="pro_drop">
                  <div className="drop_edit">
                    <span className="material-icons " id="prop_edit_icon">
                      edit
                    </span>
                    <span className="edit_cli">Edit Account</span>
                  </div>
                  <div className="drop_edit">
                    <span className="material-icons " id="prop_edit_icon">
                      logout
                    </span>
                    <span className="edit_cli">Logout </span>
                  </div>
                </div>
              ) : (
                ""
              )} */}
            </div>
          </div>
  
          <div className="nav_main">
            {LeftListing.map((val) => {
              return (
                <div  key={val.key}>
                  <nav>
                    <Link
                      to={`${val.link}`}
                      // to="/customer"
                      style={{ textDecoration: "none", color: "#00000071" }}
                    >
                      <div className="nav__link_main ">
                        <span className="material-icons nav_icon_main">
                          {val.unIcon}
                        </span>
                        <span className="nav_title_main" >{val.title}</span>
                      </div>
                    </Link>
                  </nav>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
}

export default SideNav;