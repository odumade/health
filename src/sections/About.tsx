import cogImage from '@/assets/remi.png';
import Image from 'next/image';

export const About = () => {
  return (
    <section className="bg-gradient-to-b from-[#D2DCFF] to-[#D2DCFF] py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet Our Founder, DNP. Olurounke Remi Johnson
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Olurounke Remi Johnson (DNP, APN, FNP, PMHNP-BC) is a dual board-certified specialist qualified to diagnose and treat mental health disorders across all age groups. Her expertise covers a wide range of specialties, including <span className="font-bold">Depression, Anxiety, Panic Disorders, Insomnia, ADHD, PTSD, Bipolar Disorder</span>, and more.
          </p>
          <button className="btn btn-primary">Book An Appointment</button>

        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
          <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
            <Image
              src={cogImage}
              alt="Dr. Olurounke Remi Johnson"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
