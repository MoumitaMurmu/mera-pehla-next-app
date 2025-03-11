import './navbar.css'
import Link
 from 'next/link';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>
      <ul>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;
