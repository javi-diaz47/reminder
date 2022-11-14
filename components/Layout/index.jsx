import React from "react";
import { Navbar } from "../Navbar";

export const Layout = ({ user, children }) => {
  return <Navbar user={user}>{children}</Navbar>;
};
