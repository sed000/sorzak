import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Header() {
  return (
    <div>
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-blue-100 bg-blue-100">
        <Link className="flex items-center justify-center" href="/">
          <Zap className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-blue-600 text-xl ml-2">BaaS</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <SignedOut>
            <Button>
              <SignInButton mode="modal" />
            </Button>
          </SignedOut>

          <SignedIn>
            <div className="flex gap-3 items-center">
              <Button>
                <Link className="" href="/dashboard">
                  Dashboard
                </Link>
              </Button>
              <UserButton />
            </div>
          </SignedIn>
        </nav>
      </header>
    </div>
  );
}
