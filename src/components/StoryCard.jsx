import arrowWhite from "../assets/shared/desktop/arrow-white.svg";

const StoryCard = ({id, name, author, link}) => {
  return (
    <div className={`${id} px-[33px] pb-10 text-white h-[375px] flex flex-col justify-end items-start relative group hover-effect md:h-[500px]`}>
      <h2 className="heading2 ">{name}</h2>
      <p className="text-[13px] mt-1 mb-4 border-b-[1px] border-white/25 pb-5 w-full">{author}</p>
      <a href={link} className="flex items-center justify-between w-full cta  hover:underline">
        READ STORY <img src={arrowWhite} alt="arrow" className="" />
      </a>
      <div className="hidden group-hover:block absolute bottom-0 h-[6px] bg-gradient w-0 group-hover:w-full left-0 duration-500" />
    </div>
  );
}

export default StoryCard