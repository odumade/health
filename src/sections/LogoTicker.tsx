import ptsd from '@/assets/PTSD.png';
import anxiety from '@/assets/Anxiety.png';
import depression from '@/assets/Depression.png';
import psychitric from '@/assets/Psychatric.png';
import apexLogo from '@/assets/logo-apex.png'
import dep from '@/assets/dep.png';

import Image from 'next/image';

export const LogoTicker = () => {
  return (
      <div className="py-8 md:py-12 bg-white">
          <div className="container">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
              <div className="flex gap=14 flex-none">
                  <Image src={ptsd} alt={'ptsd'} className="logo-ticker-image" />
                  <Image src={anxiety} alt={'anxiety'} className="logo-ticker-image" />
                  <Image src={ptsd} alt={'ptsd'} className="logo-ticker-image" />
                  <Image src={psychitric} alt={'psychiatric'} className="logo-ticker-image" />
                  <Image src={dep} alt={'dep'} className="logo-ticker-image" />
              </div>  
            </div>
          </div>    
      </div>
  )
};
