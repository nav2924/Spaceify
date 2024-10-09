import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="flex items-center justify-between">
            <img
              src="/logo.png"
              height={40}
              width={40}
              className="rounded-full"
            />
            <img
              src="/menu.svg"
              alt="Menu Icon"
              className="h-5 w-5 md:hidden"
            />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About Us</a>
              <a href="#">Internships</a>
              <a href="#">Services</a>
              <a href="#">Testimonials</a>
              <a href="#">Find Us</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
