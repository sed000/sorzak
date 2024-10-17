import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="py-6 px-4 bg-gray-100 border-t border-gray-100">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">@BaaS - Boolean as a Service</p>
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
