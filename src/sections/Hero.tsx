import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/remi.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between">
          {/* Text Section */}
          <div className="md:w-1/2">
            {/* <div className="text-sm inline-flex border border-[#222]/10 px-3 p-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div> */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 md:mt-12">
            Meet Our Founder, DNP. Olurounke Remi Johnson
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Olurounke Remi Johnson (DNP, APN, FNP, PMHNP-BC) is dual board certified. She is qualified to 
            diagnose and treat disorders in patients of all age groups. Some of her practice specialties 
            include <span className="font-bold">Depression, Anxiety, Panic Disorders, Insomnia, ADHD, PTSD, Bipolar Disorder </span> and many more.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Book an Appointment</button>
              {/* <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button> */}
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-10 md:mt-0 md:w-1/2 md:flex md:justify-center">
            <div className="relative md:h-[400px] lg:h-[500px] xl:h-[648px]">
              <Image
                src={cogImage}
                alt="Cog Image"
                className="h-full w-auto max-w-none md:absolute rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
