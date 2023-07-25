// import React from 'react';
// import './S-card.css';
// import { BiChevronRight } from 'react-icons/bi';
// import { Link } from 'react-router-dom';
// const SingleCard = ({ data }) => {
//   return (
//     <>
//       {data.map((item, index) => {
//         const { id, img, heading, text } = item;
//         return (
//           <div className="S-card col-12 col-md-6 col-lg-4 S-card">
//             <div
//               key={id}
//               className={`single-card  text-center py-3 py-md-4 py-lg-5 px-3 border   ${
//                 index === 1 ? 'active' : ''
//               }`}
//             >
//               <img
//                 src={img}
//                 className="img-fluid mb-3 rounded-circle p-2 mb-md-4"
//                 alt="name"
//               />

//               <h4 className="mb-3">{heading}</h4>
//               <p>{text}</p>
//               <Link
//                 className="read-more"
//                 to={`/about/${id}`}
//                 state={{ heading, text }}
//               >
//                 Read More <BiChevronRight />
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default SingleCard;
import React from 'react';
import './S-card.css';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SingleCard = ({ data, logic }) => {
  return (
    <>
      {logic ? (
        <>
          {data.map((item, index) => {
            const { id, img, heading, text } = item;
            return (
              <div className="S-card col-12 col-md-6 col-lg-4 S-card" key={id}>
                <div
                  className={`single-card  text-center py-3 py-md-4 py-lg-5 px-3 border   ${
                    index === 1 ? 'active' : ''
                  }`}
                >
                  <img
                    src={img}
                    className="img-fluid mb-3 img1 rounded-circle p-2 mb-md-4"
                    alt="name"
                  />

                  <h4 className="mb-3">{heading}</h4>
                  <p>{text}</p>
                  <Link
                    className="read-more"
                    to={`/about/${id}`}
                    state={{ heading, text }}
                  >
                    Read More <BiChevronRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {data.map((item, index) => {
            const { id, img2, heading, text } = item;
            return (
              <div className="S-card2 col-12 col-md-6 col-lg-4 S-card" key={id}>
                <div
                  className={`single-card  text-center py-3 py-md-4 py-lg-5 px-3 border   ${
                    index === 1 ? 'active' : ''
                  }`}
                >
                  <img
                    src={img2}
                    className="img-fluid mb-3  p-2 mb-md-4"
                    alt="name"
                  />

                  <h4 className="mb-3">{heading}</h4>
                  <p>{text}</p>
                  <Link
                    className="read-more"
                    to={`/about/${id}`}
                    state={{ heading, text }}
                  >
                    Read More <BiChevronRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default SingleCard;
