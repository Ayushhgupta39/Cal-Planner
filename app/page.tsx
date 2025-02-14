"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const handleLogout = async () => {
    signOut({ callbackUrl: "/sign-in" });
  };
  return (
    <div className="text-center">
      Welcome to Cal Planner
      <Button
        onClick={() => handleLogout()}
        variant="destructive"
        className="max-w-xs"
      >
        Logout
      </Button>
    </div>
  );
}
