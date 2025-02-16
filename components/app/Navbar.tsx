"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

const Navbar = ({ user }: any) => {
  console.log(user);
  const handleLogout = async () => {
    signOut({ callbackUrl: "/sign-in" });
  };
  return (
    <nav className="p-4 border-b border-b-slate-700 flex flex-row justify-between text-white">
      <p>Calendar</p>

      <p>{user?.name}</p>

      <Button
        onClick={() => handleLogout()}
        variant="destructive"
        className="max-w-xs"
      >
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
