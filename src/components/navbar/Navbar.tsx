import logoutIcon from "../../assets/logout.svg";
import smallLogo from "../../assets/small-logo.svg";

function Navbar() {
  return (
    <nav className="shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 drop-shadow-lg">
        <div className="relative flex h-16 items-center justify-between align-middle">
          {/* LOGO */}
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="w-11 h-7">
              <img className="h-8 w-auto" src={smallLogo} alt="Logo" />
            </div>
          </div>
          {/* LOGOUT BUTTON */}
          <div className="absolute  right-0 flex pr-2 shadow-white drop-shadow-md">
            <button className="relative rounded-full p-1">
              <img src={logoutIcon} alt="Logout" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
