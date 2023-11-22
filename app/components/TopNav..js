// create nav
// components/TopNav.js
import Link from "next/link";
export default function TopNav() {
return (
<nav className="nav shadow p-2 justify-content-between mb-3 background-black">
<Link className="nav-link" href="/">
Jeff's Blog
</Link>
<div className="d-flex">
<Link className="nav-link" href="/login">
Login
</Link>
<Link className="nav-link" href="/register">
Register
</Link>
</div>
</nav>
);
}
// import <TopNav /> in layout