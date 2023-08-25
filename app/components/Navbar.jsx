import React from "react";
import Link from "next/link";
import Logo from "./copilot.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Copilot Logo" width={100} quality={100} />
      <h1>Menu</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">
        <button className="btn-primary">Create Ticket</button>
      </Link>
    </nav>
  );
}
