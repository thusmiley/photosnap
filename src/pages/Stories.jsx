import arrowWhite from "../assets/shared/desktop/arrow-white.svg";
import StoryCard from "../components/StoryCard";
import { fullStoriesData } from "../constants/data";
import heroMobile from "../assets/stories/mobile/moon-of-appalacia.jpg";
import heroTablet from "../assets/stories/tablet/moon-of-appalacia.jpg";
import heroDesktop from "../assets/stories/desktop/moon-of-appalacia.jpg";

const Stories = () => {
  return (
    <div>
      {/* hero */}
      <section className="bg-black py-[72px] md:mt-[78px] md:py-0">
        <div className="text-white md:stories-hero-bg md:h-[650px]">
          <img src={heroMobile} className="w-full h-[317px] object-cover object-top md:hidden" alt="hero image" />
          <div className="pt-[48px] px-[29px] relative md:max-w-[60%] md:px-[39px] md:py-[122px] xl:w-[40%] xl:px-[110px]">
            <p className="text-[12px] tracking-[2px] mb-4 font-bold">LAST MONTH’S FEATURED STORY</p>
            <h1 className="heading1">HAZY FULL MOON OF APPALACHIA</h1>
            <p className="mt-4 text-[13px] text-white/75">
              March 2nd 2020 <span className="text-white">by John Appleseed</span>
            </p>
            <p className="paragraph text-white/60 mt-4 mb-[23px] md:mt-[21px] md:mb-12">
              The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and
              while the ridges are not high, the terrain is extremely rugged.
            </p>
            <a href="/pricing" className="inline-flex items-center cta hover:underline">
              READ THE STORY
              <img src={arrowWhite} alt="arrow" className="ml-[18px]" />
            </a>
          </div>
        </div>
      </section>

      {/* stories */}
      <section>
        <div className="md:grid md:grid-cols-2 xl:grid-cols-4">
          {fullStoriesData.map((card) => (
            <StoryCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stories;
