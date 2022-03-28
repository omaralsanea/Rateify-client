import React from 'react';
import { Link } from 'react-router-dom';
import { getAllReleases } from '../api/release';

const Home = () => {
  // const [releases, setReleases] = React.useState(null);

  // React.useEffect(() => {
  //   const getData = async () => {
  //     const release = await getAllReleases();
  //     setReleases(release);
  //   };

  //   getData();
  // }, []);

  // console.log('RELEASES ARE', releases);

  return (
    // <>
    //   <h1 className="title">Music Rating</h1>
    //   {releases ? (
    //     <div className="container">
    //       <div className="columns">
    //         {releases.map((release) => (
    //           <div key={release._id} className="column card m-4">
    //             <Link to={`/release/${release._id}`}>
    //               <h2 className="card-header">title: {release.title}</h2>
    //               <div className="card-image">
    //                 <figure className="image is-3by4">
    //                   <img src={release.img} alt={release.title} />
    //                 </figure>
    //               </div>
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   ) : (
    //     <p>Music Loading...</p>
    //   )}
    // </>
    <p>Welcome to the Music Rating App</p>
  );
};

export default Home;
