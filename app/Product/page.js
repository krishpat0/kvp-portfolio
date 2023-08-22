"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const page = () => {
  useEffect(() => {
    getImages();

    return () => {};
  }, []);

  const [images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");

      const data = response.data;
      // console.log(data);

      setImages(data);
      console.log(images);
    } catch (error) {
      console.error("Error Fetching");
    }
  };
  return (
    <>
      <div>Product page</div>
      <button
        onClick={getImages}
        className="px-5 py-3 bg-green-950 text-white rounded m-2"
      >
        Get Images
      </button>
      <div className="p-10">
        {images.map((elem, i) => {
          return (
            <img
              key={i}
              src={elem.download_url}
              width={300}
              height={300}
              className="m-10 rounded inline-block  "
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
