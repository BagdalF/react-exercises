// import React from "react";
// import axios from "axios";

// //services folder

// export function photoService() {
//   return axios.get("https://jsonplaceholder.typicode.com/photos");
// }

// //Components
// function Photo({ title, thumbnailUrl }: any) {
//   return (
//     <div className="photo">
//       <p>{title}</p>
//       <img alt={title} src={thumbnailUrl} />
//     </div>
//   );
// }

// export default class Photos extends React.Component {
//   state = {
//     albums: [],
//   };

//   async componentDidMount() {
//     const { data: photos } = await photoService();
//     const grouppedPhotos = groupBy((photo) => photo.albumId, photos);
//     const albums = Object.keys(grouppedPhotos).flatMap((albumID) => {
//       const currentPhotos = grouppedPhotos[albumID];
//       return {
//         albumID,
//         photos: currentPhotos.slice(
//           currentPhotos.length - 3,
//           currentPhotos.length
//         ),
//       };
//     });
//     this.setState({ albums });
//   }

//   render() {
//     const { albums } = this.state;
//     return (
//       <div className="photos">
//         {albums &&
//           albums.map(({ albumID, photos }) => {
//             const { url } = photos[0];
//             const borderColor = (url as string).substring(
//               (url as string).length - 6,
//               (url as string).length
//             );
//             return (
//               <div
//                 key={albumID}
//                 className="album"
//                 style={{
//                   padding: "20px",
//                   border: `1px solid #${borderColor}`,
//                   marginBottom: "5px",
//                   width: "100%",
//                 }}
//               >
//                 <p>Album {albumID}</p>
//                 {photos.map((photo, idx) => {
//                   return <Photo key={idx} {...photo} />;
//                 })}
//               </div>
//             );
//           })}
//       </div>
//     );
//   }
// }
