"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    const cleanTimer = setTimeout(() => {
        router.push("/");
      }, 3000);

      return () => clearTimeout(cleanTimer);
    
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        {"Oh bhai kidhar? 🤔"} <br />
        {"Raasta khatam ho gaya hai!"} <br />
        {"Ghar wapas ja🏃"}
      </h3>
    </div>
  );
};

export default ErrorPage;
