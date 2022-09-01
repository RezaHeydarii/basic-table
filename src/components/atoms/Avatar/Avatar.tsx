import TestPic from "@app/assets/cat.jpg";
import { CSSProperties } from "react";

export interface AvatarProps {
  width?: string;
  height?: string;
  src?: string;
  radius?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}

export const Avatar = (props: AvatarProps) => {
  const { width, height, src, radius, alt, className, style } = props;
  console.log(TestPic);
  return (
    <div className={className} style={style}>
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
