import React from 'react';

export const Productcard = ({image,name,price,description}) => {
    return (
       <div className='bg-nuetral-200 p-4 rounded-lg shadow-md flex justify-between flex-col'>
         <div  className='w-full'>
            <img src={image} alt={name} className='w-full h-56 object-cover rounded-lg mb-2'/>
            <h1>{name}</h1>
            <h3>{description}</h3>
         </div>
    <div>
    <h1 className='text-Lg font-bold my-2'>${price}</h1>
    <button className='w-full text-white px-4 py-3 rounded-md bg neutral-900'>Buy Now</button>
   </div>
       </div>
    );
    }