import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import React from "react";

const testimonials = [
  {
    text: "Your therapy and medication management have transformed my anxiety. I feel in control and hopeful about my future.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "The psychiatric evaluation pinpointed my depression's cause. The tailored treatment plan has restored my stability and joy.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Your PTSD therapy has given me confidence and peace of mind. I finally feel like I’m moving forward.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Your psychotherapy helped me understand and manage my anxiety. I feel more grounded and capable of handling life.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "Thanks to your medication management, my depression is under control. I’m back to feeling like myself again.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "The psychiatric evaluation clarified my anxiety issues. Your treatment plan has given me confidence in managing my symptoms.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Your psychotherapy has been a lifeline for my depression. I now feel hopeful and empowered to face each day.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Your expertise in treating PTSD has helped me manage my triggers. I’m starting to feel more like myself again.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { className?: string; testimonials: typeof testimonials } ) => (
  <div className="props.className">
  <motion.div animate={{
    translateY: "-50%",
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: 'linear',
    repeatType: 'loop',
  }}
  className="flex flex-col gap-6">
  {[...new Array(2)].fill(0).map((_, index) => (
    <React.Fragment key={index}>
        {props.testimonials.map(( { text, imageSrc, name, username } ) => (
        <div className="card">
          <div>{text}</div>
          <div className="flex items-center gap-2 mt-5">
            <Image src={imageSrc} width={40} height={40} alt="name" className="h-10 w-10 rounded-full" />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  ))}

</motion.div>
</div>
)


export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white">
      <div className="container">
        <div className="section-heading">
            <div className="flex justify-center">
              <div className="tag mt-5 font-bold">TESTIMONIALS</div>
            </div>
            <h2 className="section-title mt-5 bg-gradient-to-b from-[#001E80] to-[#001E80]">What our users say</h2>
            <p className="text-center text-[22px] tracking-tight text-[#001E80] mt-5">
            Hear directly from our clients about their experiences and the positive changes they’ve 
            seen through our specialized care. Their stories highlight the impact of our dedicated approach 
            to mental health and wellness.
            </p>
          </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            <TestimonialsColumn testimonials={firstColumn} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block"/>
        </div>
      </div>
    </section>
  )
};
