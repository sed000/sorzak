import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="py-6 px-4 bg-blue-200 border-t border-blue-200">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2024</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              href="#"
            >
              {
                //Contact
              }
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
