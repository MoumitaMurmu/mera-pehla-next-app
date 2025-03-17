"use client";

import { useParams } from 'next/navigation';


const ContactDetail = () => {
    const params = useParams();
  return (
    <div>
      <h2>Contact Page for {params.slug}</h2>
      <p>This is the content for {params.slug} page.</p>
    </div>
  )
}

export default ContactDetail;
