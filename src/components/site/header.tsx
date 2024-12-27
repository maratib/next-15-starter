import React from "react";
import NavBar from "./nav-bar";

type Props = {
  name?: string;
};

const Header = ({ name }: Props) => {
  return (
    <div>
      <h1>Site Header</h1>
      <NavBar />
    </div>
  );
};

export default Header;
