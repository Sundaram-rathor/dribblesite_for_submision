import React from 'react';
import img1 from '../../../assets/profile1.jpg';
import img2 from '../../../assets/profile2.jpg';
import img3 from '../../../assets/profile3.jpg';
import img4 from '../../../assets/profile4.jpg';
import img5 from '../../../assets/profile5.jpg';
import img6 from '../../../assets/profile6.jpg';
import img7 from '../../../assets/profile7.jpg';
import img8 from '../../../assets/profile8.jpg';
import img9 from '../../../assets/profile9.jpg';
import img10 from '../../../assets/profile10.jpg';

function Carousel() {
  const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <div className="overflow-hidden w-full h-[340px]">
      <div className="flex animate-infinite-scroll gap-4">
        <div className="flex gap-4">
          {imgArray.map((item, index) => (
            <div key={index} className="w-[17vw] h-[340px]">
              <img src={item} alt={`Profile ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </div>
        <div className="flex gap-4" aria-hidden="true">
          {imgArray.map((item, index) => (
            <div key={index + imgArray.length} className="w-[17vw] h-[340px]">
              <img src={item} alt={`Profile ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
