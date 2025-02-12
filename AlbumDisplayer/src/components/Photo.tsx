import { photoType } from "../types/album.types";

const Photo = ({ title, thumbnailUrl }: photoType) => {
  return (
    <img
      src={thumbnailUrl}
      alt={title.substring(0, 10)}
      className="photo"
      style={{
        borderColor: `#${thumbnailUrl.substring(
          thumbnailUrl.length - 6,
          thumbnailUrl.length
        )}`,
      }}
    />
  );
};

export default Photo;
