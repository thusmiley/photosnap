const FeatureCard = ({ img, feature, description }) => {
  return (
    <div className="text-center">
      <div className="w-[72px] h-[72px] mx-auto">
        <img src={img} alt={feature} className="w-full h-[72px] object-contain object-center" />
      </div>

      <h3 className="heading2 mt-12 mb-4">{feature}</h3>
      <p className="paragraph text-black/60 md:max-w-[475px] md:mx-auto">{description}</p>
    </div>
  );
};

export default FeatureCard;
