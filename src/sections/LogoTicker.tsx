// import ptsd from '@/assets/PTSD.png';
// import anxiety from '@/assets/Anxiety.png';
// import depression from '@/assets/Depression.png';
// import psychitric from '@/assets/Psychatric.png';
// import apexLogo from '@/assets/logo-apex.png'
// import dep from '@/assets/dep.png';

import logoabh from '@/assets/Logo_ABH.png';
import logoamerica from '@/assets/Logo_Amerigroup.jpg';
import logonjfamily from '@/assets/Logo_NJFamilycare.jpg';
import logouch from '@/assets/Logo_UHCP.png';
import logohorizon from '@/assets/Logo_HorizonNJHealth.png';
import logowellcare from '@/assets/Wellcare_logo.jpg';

import Image from 'next/image';

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF]">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="text-center text-lg md:text-[27px] md:leading-[30px] font-semibold tracking-tighter bg-gradient-to-b from-[#001E80] to-[#001E80] text-transparent bg-clip-text mt-5">
          We are serving in Texas, New Jersey, Arizona, North Carolina. We’ve teamed up with leading 
          insurance providers, including NJ Medicaid and Medicare, 
          to offer affordable and accessible mental health services.
        </h2>
        <div className="flex overflow-hidden mt-5">
          <div className="flex gap-14 flex-none">
            {/* Adjust the image height and width here */}
            <Image src={logoabh} alt={'logoabh'} className="logo-ticker-image" width={150} height={150} />
            <Image src={logoamerica} alt={'logoamerica'} className="logo-ticker-image" width={150} height={150} />
            <Image src={logonjfamily} alt={'logonjfamily'} className="logo-ticker-image" width={150} height={150} />
            <Image src={logouch} alt={'logouch'} className="logo-ticker-image" width={150} height={150} />
            <Image src={logohorizon} alt={'logohorizon'} className="logo-ticker-image" width={150} height={150} />
            <Image src={logowellcare} alt={'logowellcare'} className="logo-ticker-image" width={150} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
};