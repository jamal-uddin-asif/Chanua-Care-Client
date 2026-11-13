import React, { useState } from "react";

export const useImgBBLink = () => {
  const [loading, setLoading] = useState(false);

  const uploadPhoto = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    const apiKey = "ea3263da336d53d2c9697d59c0634f2d";
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?expiration=600&key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await res.json();
      setLoading(false);
      return data.data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, uploadPhoto };
};

export default useImgBBLink;
