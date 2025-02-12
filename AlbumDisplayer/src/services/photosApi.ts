import { API_REQ } from "../CONSTANTS";
import { photoType } from "../types/album.types";

export const fetchAlbums = async () => {
  const fetchPhotos: photoType[] = await fetch(API_REQ)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      return [];
    });

  const photosAlbumsObject = Object.groupBy(
    fetchPhotos,
    ({ albumId }) => albumId
  );
  const photosAlbumsArray = Array.from(Object.values(photosAlbumsObject));

  console.log(photosAlbumsArray);

  return photosAlbumsArray;
};
