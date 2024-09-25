"use client"

import { CallToAction } from "@/sections/CallToAction"
import { Footer } from "@/sections/Footer"
import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
// import { About } from "@/sections/About";
import { LogoTicker } from "@/sections/LogoTicker"
import { ProductShowcase } from "@/sections/ProductShowcase"
import { Testimonials } from "@/sections/Testimonials"
import { FAQ } from "@/sections/Faq";

export default function Home() {
  return (
    <>
      <Header  />
      <Hero />
      <LogoTicker />
      {/* <About /> */}
      {/* <ProductShowcase /> */}
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  )
    
}
