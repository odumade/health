import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import Link from 'next/link';


export const Headers = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-black text-white text-md gap-3">
        <p className="text-white hidden md:block">Akroo Health, is committed to helping you achieve your mental health and behavioral goals through our virtual services </p>
        <div className="inline-flex gap-1 items-center">
          <p></p>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt='Sass Logo' height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-[#001E80] items-center font-bold">
              {/* <Link href="">ABOUT</Link>
              <Link href="#practice">PRACTICE AREA</Link>
              <Link href="#testimonials">TESTIMONIALS</Link>
              <Link href="#faq">FAQ</Link> */}
              <a href="https://calendly.com/akroohealth-support/1hr" target="_blank" rel="noopener noreferrer">
              <button className="bg-black text-white  px-4 py-2 rounded-lg font-medium inline-flex align-item justify-center tracking-tight">Book An Appointment</button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};
