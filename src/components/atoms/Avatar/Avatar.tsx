import TestPic from "@app/assets/space-man.png";

interface AvatarProps {
  width?: string;
  height?: string;
  src?: string;
  radius?: string;
  alt?: string;
  className?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { width, height, src, radius, alt, className } = props;
  console.log(TestPic);
  return (
    <div className={className}>
      <img
        style={{ width, height, borderRadius: radius }}
        width={width}
        height={height}
        className="rounded-circle"
        src={src || TestPic} // for test purposes
        alt={alt}
      />
    </div>
  );
};

Avatar.defaultProps = {
  width: "3.75rem",
  height: "3.75rem",
};
