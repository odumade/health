
export const CallToAction = () => {
  return (
    <section id="calltoaction" className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <h2 className="section-title">Book an appointment today</h2>
        <p className="text-center text-[22px] tracking-tight text-[#010D3E] mt-5">
        Taking the first step towards better mental health starts with booking an appointment. Our personalized care offers expert support and compassionate 
        guidance tailored to your needs. Begin your journey to a healthier, more balanced life today.
        </p>
        <div className="flex gpa-2 mt-10 justify-center">
        <a href="https://calendly.com/akroohealth-support/1hr" target="_blank" rel="noopener noreferrer">

          <button className="btn btn-primary">Book an appointment</button>
          </a>
          <button className="btn btn-text">Learn more</button>
        </div>
      </div>
    </section>
  ) 
};
