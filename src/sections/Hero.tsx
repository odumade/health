import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/remi.png';
import happy4 from '@/assets/happy.avif';
import { motion } from 'framer-motion';

import Image from 'next/image';

export const Hero = () => {
  return (
    <section id="hero" className="pt-8 pb-20 md:pt-5 md:pb-10 ">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-[#001E80] to-[#001E80] text-transparent bg-clip-text mt-6 md:mt-12">
            Welcome to Akroo Health            
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 leading-relaxed">
  At Akroo Health, we are dedicated to empowering you on your journey toward mental and behavioral well-being through our 
  comprehensive virtual services. With a team of highly skilled professionals, we provide personalized support every step of 
  the way, helping you achieve your goals with care and expertise. Some of our practice specialties 
  include <span className="font-bold">Depression, Anxiety, Panic Disorders, Insomnia, ADHD, PTSD, Bipolar Disorder</span> and many more.
</p>
            <div className="flex gap-1 items-center mt-[30px]">
              <a href="https://calendly.com/akroohealth-support/1hr" target="_blank" rel="noopener noreferrer">

              <button className="btn btn-primary">Book An Appointment</button>
              </a>
              <button className="btn btn-text gap-1">
                <span className="text-lg">Tel: (972) 525-0134</span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-10 md:mt-0 md:w-1/2 md:flex md:justify-center">
            <div className="relative md:h-[400px] lg:h-[500px] xl:h-[648px]">
              <motion.img
                src={happy4.src}
                alt="Cog Image"
                className="h-full w-auto max-w-none md:absolute rounded-full"
                animate={{
                    translateY: [-30, 30],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
