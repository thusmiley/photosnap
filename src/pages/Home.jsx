import arrowWhite from "../assets/shared/desktop/arrow-white.svg";
import arrowBlack from "../assets/shared/desktop/arrow.svg";
import heroMobile from "../assets/home/mobile/create-and-share.jpg";
import heroTablet from "../assets/home/tablet/create-and-share.jpg";
import heroDesktop from "../assets/home/desktop/create-and-share.jpg";
import storiesMobile from "../assets/home/mobile/beautiful-stories.jpg";
import storiesTablet from "../assets/home/tablet/beautiful-stories.jpg";
import storiesDesktop from "../assets/home/desktop/beautiful-stories.jpg";
import designedMobile from "../assets/home/mobile/designed-for-everyone.jpg";
import designedTablet from "../assets/home/tablet/designed-for-everyone.jpg";
import designedDesktop from "../assets/home/desktop/designed-for-everyone.jpg";
import StoryCard from "../components/StoryCard";
import FeatureCard from "../components/FeatureCard";
import { homeStoryData, homeFeaturesData } from "../constants/data";

const Home = () => {
  return (
    <div>
      {/* hero */}
      <section className="bg-black py-[72px] md:mt-[78px] md:py-0">
        <div className="text-white md:flex md:flex-row-reverse md:items-center md:h-[650px]">
          <picture className="md:w-[40%] xl:w-[60%]">
            <source media="(max-width: 680px)" srcSet={heroMobile} />
            <source media="(max-width: 1200px)" srcSet={heroTablet} />
            <source media="(min-width: 1201px)" srcSet={heroDesktop} />
            <img src={heroMobile} className="w-full h-[full] object-cover object-top md:h-[650px]" alt="hero image" />
          </picture>
          <div className="mt-[72px] px-[1rem] relative md:w-[60%] md:px-[54px] md:my-[173px] xl:w-[40%] xl:px-[110px]">
            <div className="deco-line md:w-[6px] md:h-full md:left-0" />
            <h1 className="heading1">Create and share your photo stories.</h1>
            <p className="paragraph text-white/60 mt-4 mb-[23px] md:mt-[21px] md:mb-12">
              Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
            </p>
            <a href="/pricing" className="inline-flex items-center cta hover:underline">
              GET AN INVITE <img src={arrowWhite} alt="arrow" className="ml-[18px]" />
            </a>
          </div>
        </div>
      </section>

      {/* beautiful stories */}
      <section>
        <div className="md:flex md:items-center md:h-[650px]">
          <picture className="md:w-[40%] xl:w-[60%]">
            <source media="(max-width: 680px)" srcSet={storiesMobile} />
            <source media="(max-width: 1200px)" srcSet={storiesTablet} />
            <source media="(min-width: 1201px)" srcSet={storiesDesktop} />
            <img src={storiesMobile} className="w-full h-[full] object-cover object-top md:h-[650px]" alt="hero image" />
          </picture>
          <div className="py-[72px] px-[1rem] relative md:w-[60%] md:px-[54px] xl:w-[40%] xl:px-[110px]">
            <h2 className="heading1">BEAUTIFUL STORIES EVERY TIME</h2>
            <p className="paragraph text-black/60 mt-4 mb-[23px] md:mt-[21px] md:mb-12">
              We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with
              everyone.
            </p>
            <a href="/pricing" className="inline-flex items-center cta hover:underline">
              VIEW THE STORIES <img src={arrowBlack} alt="arrow" className="ml-[18px]" />
            </a>
          </div>
        </div>
      </section>

      {/* designed for everyone */}
      <section>
        <div className="md:flex md:flex-row-reverse md:items-center md:h-[650px]">
          <picture className="md:w-[40%] xl:w-[60%]">
            <source media="(max-width: 680px)" srcSet={designedMobile} />
            <source media="(max-width: 1200px)" srcSet={designedTablet} />
            <source media="(min-width: 1201px)" srcSet={designedDesktop} />
            <img src={designedMobile} className="w-full h-[full] object-cover object-top md:h-[650px]" alt="hero image" />
          </picture>
          <div className="py-[72px] px-[1rem] relative md:w-[60%] md:px-[54px] xl:w-[40%] xl:px-[110px]">
            <h2 className="heading1">DESIGNED FOR EVERYONE</h2>
            <p className="paragraph text-black/60 mt-4 mb-[23px] md:mt-[21px] md:mb-12">
              Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.
            </p>
            <a href="/pricing" className="inline-flex items-center cta hover:underline">
              VIEW THE STORIES <img src={arrowBlack} alt="arrow" className="ml-[18px]" />
            </a>
          </div>
        </div>
      </section>

      {/* stories */}
      <section>
        <div className="md:grid md:grid-cols-2 xl:grid-cols-4">
          {homeStoryData.map((card) => (
            <StoryCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* features */}
      <section>
        <div className="container mx-auto py-20 space-y-[56px] md:py-[120px] md:space-y-20 xl:flex xl:justify-around xl:items-start xl:space-y-0 xl:space-x-[30px]">
          {homeFeaturesData.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
