// import React from 'react';

// const PropertyCard = ({ type, price, title, location, bedrooms, bathrooms, size, image }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//       <img className="w-full" src={image} alt="Property" />
//       <div className="px-6 py-4">
//         <div className="flex justify-between items-center">
//           <span className={`font-bold text-xl ${type === 'For Sale' ? 'text-green-500' : 'text-blue-500'}`}>
//             {type}
//           </span>
//           <span className="font-bold text-xl text-gray-900">
//             ₦{price.toLocaleString()}
//           </span>
//         </div>
//         <p className="text-gray-700 text-base mt-2">
//           {title}
//         </p>
//         <p className="text-gray-500 text-sm">
//           {location}
//         </p>
//         <div className="mt-4">
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
//             {bedrooms} Beds
//           </span>
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
//             {bathrooms} Baths
//           </span>
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
//             {size} ft²
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
