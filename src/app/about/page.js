import Main from "@/components/mainSection/mainPage";
import Link from "next/link";


const page = () => {
  return (
    <>
      <h3>This is my about page!</h3>
      <Link href="/about/sub-about"><button>Nested About</button></Link>
    
    </>
  )
}

export default page;
