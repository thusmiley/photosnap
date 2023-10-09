import heroMobile from "../assets/pricing/mobile/hero.jpg";
import heroTablet from "../assets/pricing/tablet/hero.jpg";
import heroDesktop from "../assets/pricing/desktop/hero.jpg";
import CTA from "../components/CTA";
import { useState } from "react";
import check from "../assets/pricing/desktop/check.svg";

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <div>
      {/* hero */}
      <section className="bg-black py-[72px] md:mt-[78px] md:py-0">
        <div className="text-white md:flex md:flex-row-reverse md:items-center md:h-[650px]">
          <picture className="md:w-[40%] xl:w-[60%]">
            <source media="(max-width: 768px)" srcSet={heroMobile} />
            <source media="(max-width: 1200px)" srcSet={heroTablet} />
            <source media="(min-width: 1201px)" srcSet={heroDesktop} />
            <img src={heroMobile} className="w-full h-[full] object-cover object-top md:h-[650px]" alt="hero image" />
          </picture>
          <div className="mt-[72px] px-[29px] relative md:w-[60%] md:px-[54px] md:my-[173px] xl:w-[40%] xl:px-[110px]">
            <div className="deco-line top-[-72px] md:w-[6px] md:top-0 md:h-full md:left-0" />
            <h1 className="heading1">PRICING</h1>
            <p className="paragraph text-white/60 mt-4 md:mt-[21px]">
              Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.
            </p>
          </div>
        </div>
      </section>

      {/* plans */}
      <section className="py-[64px] md:py-[112px] xl:pb-[160px]">
        <div className="px-[29px]">
          {/* switch */}
          <div className="flex justify-center items-center space-x-8 mb-10 xl:mb-12">
            <p className={`${monthly ? "text-black" : "text-black/50"} heading2`}>Monthly</p>
            <label className="relative inline-block w-[64px] h-8 switch">
              <input type="checkbox" className="opacity-0 w-0 h-0 peer" onChange={() => setMonthly(!monthly)} />
              <span className="slider absolute cursor-pointer top-0 left-0 bottom-0 right-0 bg-lightGrey  duration-300 before:absolute before:h-6 before:w-6 before:left-1 before:bottom-1 before:bg-black before:duration-300 rounded-[16px] before:rounded-full peer-checked:before:bg-white peer-checked:bg-black peer-checked:before:translate-x-8 peer-checked:before:-webkit-translate-x-8"></span>
            </label>
            <p className={`${!monthly ? "text-black" : "text-black/50"}  heading2`}>Yearly</p>
          </div>

          {/* plan cards */}
          <div className="space-y-6 xl:space-y-0 xl:flex xl:items-center xl:justify-center xl:space-x-[30px]">
            {/* basic */}
            <div className="text-center pt-[56px] pb-[120px] px-[22px] bg-[#f5f5f5] relative md:flex md:justify-between md:items-start md:px-10 md:pt-10 md:pb-[90px] xl:flex-col xl:items-center xl:pt-[56px] xl:pb-[120px]">
              <div className="md:text-left md:w-[270px] md:relative xl:text-center xl:static">
                <h3 className="heading4">Basic</h3>
                <p className="paragraph text-black/60 mt-[18px] mb-10 md:mb-8">Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                <a
                  href="/pricing"
                  className="cta text-white bg-black py-3 w-[245px] absolute bottom-10 left-0 right-0 mx-auto hover:text-black hover:bg-lightGrey md:w-full md:bottom-[-44px] md:text-center xl:bottom-10 xl:w-[270px]"
                >
                  PICK PLAN
                </a>
              </div>
              <div className="md:text-right xl:text-center">
                <h4 className="heading5">
                  <span className={`${monthly ? "block" : "hidden"} fadeout`}>$19.00</span>
                  <span className={`${!monthly ? "block" : "hidden"} fadeout`}>$190.00</span>
                </h4>
                <p className="paragraph text-black/60 inline-flex">
                  per &nbsp;<span className={`${monthly ? "block" : "hidden"}`}>month</span>
                  <span className={`${!monthly ? "block" : "hidden"}`}>year</span>
                </p>
              </div>
            </div>

            {/* pro */}
            <div className="text-center text-white pt-[56px] pb-[120px] px-[22px] bg-black relative md:flex md:justify-between md:items-start md:px-10 md:pt-10 md:pb-[90px] xl:flex-col xl:items-center xl:pt-[88px] xl:pb-[151px]">
              <div className="bg-gradient h-[6px] w-full absolute top-0 left-0 md:h-full md:w-[6px] xl:h-[6px] xl:w-full" />
              <div className="md:text-left md:w-[270px] md:relative xl:text-center xl:static">
                <h3 className="heading4">Pro</h3>
                <p className="paragraph text-white/60 mt-[18px] mb-10 md:mb-8">More advanced features available. Recommended for photography veterans and professionals.</p>
                <a
                  href="/pricing"
                  className="cta text-black bg-white py-3 w-[245px] absolute bottom-10 left-0 right-0 mx-auto hover:bg-lightGrey md:w-full md:bottom-[-44px] md:text-center xl:bottom-10 xl:w-[270px]"
                >
                  PICK PLAN
                </a>
              </div>
              <div className="md:text-right xl:text-center">
                <h4 className="heading5">
                  <span className={`${monthly ? "block" : "hidden"} fadeout`}>$39.00</span>
                  <span className={`${!monthly ? "block" : "hidden"} fadeout`}>$390.00</span>
                </h4>
                <p className="paragraph text-white/60 inline-flex">
                  per &nbsp;<span className={`${monthly ? "block" : "hidden"}`}>month</span>
                  <span className={`${!monthly ? "block" : "hidden"}`}>year</span>
                </p>
              </div>
            </div>

            {/* business */}
            <div className="text-center pt-[56px] pb-[120px] px-[22px] bg-[#f5f5f5] relative md:flex md:justify-between md:items-start md:px-10 md:pt-10 md:pb-[90px] xl:flex-col xl:items-center xl:pt-[56px] xl:pb-[120px]">
              <div className="md:text-left md:w-[270px] md:relative xl:text-center xl:static">
                <h3 className="heading4">Business</h3>
                <p className="paragraph text-black/60 mt-[18px] mb-10 md:mb-8">Additional features available such as more detailed metrics. Recommended for business owners.</p>
                <a
                  href="/pricing"
                  className="cta text-white bg-black py-3 w-[245px] absolute bottom-10 left-0 right-0 mx-auto hover:text-black hover:bg-lightGrey md:w-full md:bottom-[-44px] md:text-center xl:bottom-10 xl:w-[270px]"
                >
                  PICK PLAN
                </a>
              </div>
              <div className="md:text-right xl:text-center">
                <h4 className="heading5">
                  <span className={`${monthly ? "block" : "hidden"} fadeout`}>$99.00</span>
                  <span className={`${!monthly ? "block" : "hidden"} fadeout`}>$990.00</span>
                </h4>
                <p className="paragraph text-black/60 inline-flex">
                  per &nbsp;<span className={`${monthly ? "block" : "hidden"}`}>month</span>
                  <span className={`${!monthly ? "block" : "hidden"}`}>year</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* compare */}
      <section className="pb-[64px] px-[29px] md:pb-[112px] xl:pb-[160px]">
        <div className="xl:w-[731px] xl:mx-auto">
          <h2 className="hidden md:block heading5 text-center mb-[64px]">COMPARE</h2>
          <div>
            {/* the features */}
            <div className="pb-6 border-b-[1px] border-black md:flex md:justify-between md:items-center">
              <h3 className="heading6 md:w-[40%]">THE FEATURES</h3>
              <div className="hidden md:flex md:w-[60%] md:justify-between md:items-center">
                <h4 className="heading6 md:w-[140px] text-center">BASIC</h4>
                <h4 className="heading6 md:w-[140px] text-center">PRO</h4>
                <h4 className="heading6 md:w-[140px] text-center">BUSINESS</h4>
              </div>
            </div>

            {/* UNLIMITED STORY POSTING */}
            <div className="py-6 border-b-[1px] border-lightGrey md:flex md:justify-between md:items-center">
              <h3 className="heading6 md:w-[40%]">UNLIMITED STORY POSTING</h3>
              <div className="flex space-x-[68px] mt-4 md:flex md:w-[60%] md:justify-between md:items-center md:mt-0 md:space-x-0">
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BASIC</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">PRO</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BUSINESS</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
              </div>
            </div>

            {/* UNLIMITED PHOTO UPLOAD */}
            <div className="py-6 border-b-[1px] border-lightGrey md:flex md:justify-between md:items-center">
              <h3 className="heading6 md:w-[40%]">UNLIMITED PHOTO UPLOAD</h3>
              <div className="flex space-x-[68px] mt-4 md:flex md:w-[60%] md:justify-between md:items-center md:mt-0 md:space-x-0">
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BASIC</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">PRO</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BUSINESS</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
              </div>
            </div>

            {/* EMBEDDING CUSTOM CONTENT */}
            <div className="py-6 border-b-[1px] border-lightGrey md:flex md:justify-between md:items-center">
              <h3 className="heading6 md:w-[40%]">EMBEDDING CUSTOM CONTENT</h3>
              <div className="flex space-x-[68px] mt-4 md:flex md:w-[60%] md:justify-between md:items-center md:mt-0 md:space-x-0">
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BASIC</span>
                  <img src={check} alt="check" className="mt-2 hidden" />
                </h4>
                <h4 className="planText">
                  <span className="md:hidden">PRO</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BUSINESS</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
              </div>
            </div>

            {/* CUSTOMIZE METADATA */}
            <div className="py-6 border-b-[1px] border-lightGrey md:flex md:justify-between md:items-center">
              <h3 className="heading6 md:w-[40%]">CUSTOMIZE METADATA</h3>
              <div className="flex space-x-[68px] mt-4 md:flex md:w-[60%] md:justify-between md:items-center md:mt-0 md:space-x-0">
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BASIC</span>
                  <img src={check} alt="check" className="mt-2 hidden" />
                </h4>
                <h4 className="planText">
                  <span className="md:hidden">PRO</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BUSINESS</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
              </div>
            </div>

            {/* ADVANCED METRICS */}
            <div className="py-6 border-b-[1px] border-lightGrey md:flex md:justify-between md:items-center">
              <h3 className="heading6 md:w-[40%]">ADVANCED METRICS</h3>
              <div className="flex space-x-[68px] mt-4 md:flex md:w-[60%] md:justify-between md:items-center md:mt-0 md:space-x-0">
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BASIC</span>
                  <img src={check} alt="check" className="mt-2 hidden" />
                </h4>
                <h4 className="planText">
                  <span className="md:hidden">PRO</span>
                  <img src={check} alt="check" className="mt-2 hidden" />
                </h4>
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BUSINESS</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
              </div>
            </div>

            {/* PHOTO DOWNLOADS*/}
            <div className="py-6 border-b-[1px] border-lightGrey md:flex md:justify-between md:items-center">
              <h3 className="heading6 md:w-[40%]">PHOTO DOWNLOADS</h3>
              <div className="flex space-x-[68px] mt-4 md:flex md:w-[60%] md:justify-between md:items-center md:mt-0 md:space-x-0">
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BASIC</span>
                  <img src={check} alt="check" className="mt-2 hidden" />
                </h4>
                <h4 className="planText">
                  <span className="md:hidden">PRO</span>
                  <img src={check} alt="check" className="mt-2 hidden" />
                </h4>
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BUSINESS</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
              </div>
            </div>

            {/* SEARCH ENGINE INDEXING */}
            <div className="py-6 border-b-[1px] border-lightGrey md:flex md:justify-between md:items-center">
              <h3 className="heading6  md:w-[40%]">SEARCH ENGINE INDEXING</h3>
              <div className="flex space-x-[68px] mt-4 md:flex md:w-[60%] md:justify-between md:items-center md:mt-0 md:space-x-0">
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BASIC</span>
                  <img src={check} alt="check" className="mt-2 hidden" />
                </h4>
                <h4 className="planText">
                  <span className="md:hidden">PRO</span>
                  <img src={check} alt="check" className="mt-2 hidden" />
                </h4>
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BUSINESS</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
              </div>
            </div>

            {/* CUSTOM ANALYTICS */}
            <div className="py-6 border-b-[1px] border-lightGrey md:flex md:justify-between md:items-center">
              <h3 className="heading6 md:w-[40%]">CUSTOM ANALYTICS</h3>
              <div className="flex space-x-[68px] mt-4 md:flex md:w-[60%] md:justify-between md:items-center md:mt-0 md:space-x-0">
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BASIC</span>
                  <img src={check} alt="check" className="mt-2 hidden" />
                </h4>
                <h4 className="planText">
                  <span className="md:hidden">PRO</span>
                  <img src={check} alt="check" className="mt-2 hidden" />
                </h4>
                <h4 className="planText md:flex md:items-center md:justify-center md:w-[140px]">
                  <span className="md:hidden">BUSINESS</span>
                  <img src={check} alt="check" className="mt-2 w-4 h-3 object-contain object-center md:mt-0" />
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Pricing;
