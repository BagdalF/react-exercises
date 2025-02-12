import { useEffect, useState } from "react";
import { fetchAlbums } from "../services/photosApi";
import Album from "./Album";
import { photoType } from "../types/album.types";

const Albums = () => {
  const [errorAlbum, setErrorAlbum] = useState<string | null>(null);
  const [loadingAlbum, setLoadingAlbum] = useState<boolean>(false);
  const [albumsState, setAlbumsState] = useState<photoType[][] | null>(null);

  useEffect(() => {
    setLoadingAlbum(true);
    try {
      fetchAlbums().then((res) => {
        if (!res || res.some((item) => item === undefined)) {
          throw new Error("Data is Undefined");
        }
        setAlbumsState(res as photoType[][]);
      });
    } catch (error) {
      console.error(error);
      setErrorAlbum(error as string);
    } finally {
      setLoadingAlbum(false);
    }
  }, []);

  if (loadingAlbum) {
    return <div>Loading...</div>;
  }

  if (errorAlbum) {
    return <div className="msg-error">{errorAlbum}</div>;
  }

  if (!albumsState?.length) {
    return <div>No Data!</div>;
  }

  return (
    <div>
      {albumsState.map((album: photoType[]) => (
        <Album photos={album} key={album[0].albumId} />
      ))}
    </div>
  );
};

export default Albums;
