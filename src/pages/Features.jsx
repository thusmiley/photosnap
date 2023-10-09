import heroMobile from "../assets/features/mobile/hero.jpg";
import heroTablet from "../assets/features/tablet/hero.jpg";
import heroDesktop from "../assets/features/desktop/hero.jpg";
import FeatureCard from "../components/FeatureCard";
import { fullFeaturesData } from "../constants/data";
import CTA from "../components/CTA";

const Features = () => {
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
            <h1 className="heading1">FEATURES</h1>
            <p className="paragraph text-white/60 mt-4 md:mt-[21px]">
              We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories.
            </p>
          </div>
        </div>
      </section>

      {/* features */}
      <section>
        <div className="px-[29px] mx-auto py-20 space-y-[56px] md:py-[112px] md:space-y-0 md:grid md:grid-cols-2 md:gap-y-[72px] md:gap-x-[11px] md:px-10 xl:grid-cols-3 xl:gap-y-[104px] xl:gap-x-[30px] xl:px-[165px]">
          {fullFeaturesData.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Features;
