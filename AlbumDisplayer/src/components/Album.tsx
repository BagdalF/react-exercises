import { photoType } from "../types/album.types";
import Photo from "./Photo";

type photosProp = {
  photos: photoType[];
};

const Album = ({ photos }: photosProp) => {
  return (
    <div className="album">
      <h2>Album {photos[0].albumId}</h2>
      <div className="gallery">
        {photos.map((photo) => (
          <Photo {...photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
};

export default Album;
