import bgImage from "../assets/parallex/px1.jpg";

export default function ParallaxComponent({
  image = bgImage,
  height = "500px",
  children,
}) {
  const wrapperStyle = {
    backgroundImage: `url(${image})`,
    height,
  };

  return (
    <div className="parallax" style={wrapperStyle}>
      <div className="parallax-overlay d-flex align-items-center justify-content-center">
        <div className="container  text-center">{children}</div>
      </div>
    </div>
  );
}
