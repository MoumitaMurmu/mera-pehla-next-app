import Link from "next/link";


const SideBar = () => {
  return (
    <div>
    <ul>
      <li><Link href="/contact/home-contact">Home Contact</Link></li>
      <li><Link href="/contact/work-contact">Work Contact</Link></li>
      <li><Link href="/contact/personal-contact">Personal Contact</Link></li>
    </ul>
  </div>
  )
}

export default SideBar;
