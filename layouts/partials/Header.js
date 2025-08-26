"use client";

import Logo from "@components/Logo";
import Link from "next/link";
import config from "../../config/config.json";

const Header = () => {
  // logo source
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;

  return (
    <header className="header">
      <nav className="navbar container flex items-center justify-between">
        {/* logo */}
        <div>
          <Logo src={logo} />
        </div>

        {/* Email Us button - always visible */}
        {enable && (
          <div>
            <Link className="btn btn-primary z-0 py-[14px]" href={link} rel="">
              {label}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
