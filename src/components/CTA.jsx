import arrowWhite from "../assets/shared/desktop/arrow-white.svg";

const CTA = () => {
  return (
    <section className="cta-bg text-white">
      <div className="py-[64px] px-[29px] relative md:flex md:justify-between md:items-center md:px-10 md:py-[68px] xl:px-[165px]">
        <div className="deco-line top-0 md:w-[6px] md:top-0 md:h-full md:left-0" />
        <h2 className="uppercase heading1 mb-6 md:mr-[120px] md:mb-0 md:max-w-[400px]">We’re in beta. Get your invite today!</h2>
        <a href="/pricing" className="inline-flex items-center cta hover:underline md:w-[40%] md:justify-end">
          GET AN INVITE <img src={arrowWhite} alt="arrow" className="ml-[18px]" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
