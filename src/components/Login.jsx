import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyWatchlist from "./MyWatchlist";
import { NavLink } from "react-router-dom";
import { useAuth } from "../mystore/auth";
function Login() {
  // log out function to log the user out of google and set the profile array to null
  // const logOut = () => {
  //   localStorage.removeItem("tokens");
  //   localStorage.removeItem("token");
  //   console.log("logged out successfully");
  //   googleLogout();
  // };

  const { isLoggedIn, isRegister, LogoutUser, DeleteUser, logOut } = useAuth();

  return (
    <>
      <div className="flex">
        <div className=" hidden md:block">
          <Header />
        </div>
        <div className="w-full pl-2 h-screen md:h-full">
          <div className="flex justify-end pr-3 pt-5 pb-1 gap-1">
            {/* <a href="https://en.wikipedia.org/wiki/Disney%2B_Hotstar">
              <button className="">Help & Support</button>
            </a> */}
            {isLoggedIn ? (
              <>
                <NavLink to="/Paywall">
                  <button
                    className="h-[35px] flex place-items-center "
                    style={{ backgroundColor: "#FFCC751A", color: "#ffe490" }}
                  >
                    subscribe
                  </button>
                </NavLink>
                <NavLink to="/contact">
                  <button className="">Help & Support</button>
                </NavLink>
              </>
            ) : (
              <>
                <button
                  onClick={() => toast.warning("Please login")}
                  className="h-[35px] flex place-items-center "
                  style={{ backgroundColor: "#FFCC751A", color: "#ffe490" }}
                >
                  subscribe
                </button>
                <button
                  className=""
                  onClick={() => toast.warning("Please login")}
                >
                  Help & Support
                </button>
              </>
            )}

            {isRegister && (
              <button className="w-[150px] md:w-[200px]" onClick={DeleteUser}>
                Delete
              </button>
            )}
          </div>
          <div className=" text-center ">
            <img
              className="mx-auto"
              src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png"
            />
            <h1 className=" pb-3">Login to Disney+ Hotstar</h1>
            <h3 className="hidden md:block pb-3">
              Start watching from where you left off,personalise for kids and
              more
            </h3>

            {/* <button>Log Out</button> */}
            {!isLoggedIn ? (
              <NavLink to="/Loginform">
                <button className="w-[150px] md:w-[250px]">Log In</button>
              </NavLink>
            ) : (
              <>
                <button
                  className="w-[150px] md:w-[250px]"
                  onClick={() => {
                    logOut();
                    LogoutUser();
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
          <MyWatchlist />
          <div className="pt-[100px] md:pt-[190px]">
            <Footer />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
