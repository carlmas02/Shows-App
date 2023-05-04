import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h2>Shows Time</h2>

        <Link to="/bookings">
          <button>See all Bookings</button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
