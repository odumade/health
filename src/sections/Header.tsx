import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';


export const Header = () => {
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
            <nav className="hidden md:flex gap-6 text-black/60 items-center font-semibold">
              <a href="#">About</a>
              <a href="#">Practice Areas</a>
              <a href="#">Faq</a>
              <a href="#">Help</a>
              <button className="bg-black text-white  px-4 py-2 rounded-lg font-medium inline-flex align-item justify-center tracking-tight">Book an Appointment</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};
