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
        <div className="text-white md:flex md:flex-row-reverse md:items-center md:h-[650px]">
          <picture className="md:w-[40%] xl:w-[60%]">
            <source media="(max-width: 768px)" srcSet={heroMobile} />
            <source media="(max-width: 1200px)" srcSet={heroTablet} />
            <source media="(min-width: 1201px)" srcSet={heroDesktop} />
            <img src={heroMobile} className="w-full h-[full] object-cover object-top md:h-[650px]" alt="hero image" />
          </picture>
          <div className="mt-[48px] px-[29px] relative md:w-[60%] md:px-[54px] md:my-[173px] xl:w-[40%] xl:px-[110px]">
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
              READ THE STORY<img src={arrowWhite} alt="arrow" className="ml-[18px]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
