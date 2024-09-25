import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
   <section id="practice" className="bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] py-10">
      <div className="container">        
        <div className="flex justify-center font-bold">
          <div className="tag">Practice Area</div>
        </div>
        {/* <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
          We are serving in Texas, Sacramento, San Francisco/Bay Area, Southern California, Georgia and Washington
        </h2> */}
        <h2 className="text-center text-lg md:text-[40px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-[#001E80] to-[#001E80] text-transparent bg-clip-text mt-5">
          We are serving in Texas, New Jersey, Arizona, North Carolina.
        </h2>

          {/* <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#001E80]">
            Effortlessly turn your idea into a fully functional, responsive, Sass,
            website in just minutes with this template
          </p> */}  
          {/* <div className="relative">
            <Image src={productImage} alt='product image' className="mt-10" />
            <Image height={262} width={262} src={pyramidImage} alt='pyramid image' className="hidden md:block absolute -right-36 -top-32"/>
            <Image src={tubeImage} alt='tube image' height={248} className="hidden md:block absolute bottom-24 -left-36" /> 
         </div> */}
      </div>
   </section>
  )
};
