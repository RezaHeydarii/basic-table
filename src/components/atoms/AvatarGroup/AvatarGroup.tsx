import { Avatar, AvatarProps } from "../Avatar/Avatar";

interface AvatarGroupProps
  extends Pick<AvatarProps, "width" | "height" | "radius" | "className"> {
  avatars: Array<{
    src?: string;
    alt?: string;
  }>;
  limit?: number;
}

export const AvatarGroup = (props: AvatarGroupProps) => {
  const { avatars, width, height, radius, className, limit } = props;
  return (
    <div className={className}>
      <div className="d-flex">
        {avatars.slice(0, limit).map((a, index) => {
          return (
            <Avatar
              src={a.src}
              alt={a.alt}
              key={index}
              width={width}
              height={height}
              radius={radius}
              style={{ marginLeft: index > 0 ? "-2.7rem" : "0" }}
            />
          );
        })}
        {avatars.length > (limit || 0) && (
          <div
            style={{ width, height, marginLeft: "-2.7rem" }}
            className="rounded-circle bg-black d-flex justify-content-center align-items-center"
          >
            <p className="text-white">+{avatars.length - (limit || 0)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

AvatarGroup.defaultProps = {
  width: "3.75rem",
  height: "3.75rem",
};
