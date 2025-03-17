import Link from "next/link";


const page = () => {
  return (
    <div>
      <h3>This is my about page!</h3>
      <Link href="/about/sub-about"><button>Nested About</button></Link>
    </div>
  )
}

export default page;
