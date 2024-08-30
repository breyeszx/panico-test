import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";

const Hero = dynamic(() => import("@/src/components/hero"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />;
    </>
  );
}
