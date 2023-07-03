

const Nav = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 text-xl"
            >
              <li className="text-xl">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
                
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><h2>arafat.dev</h2></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a href="#home">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Resume</a>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
