import React from "react";
import Image from "next/image";
import picture from "../../public/vercel.svg";

const ProfilePicture = ({ url }) => {
  return (
    <div className="flex justify-center">
      <figure
        className="
              w-24
              aspect-square
              rounded-full bg-slate-300 relative overflow-hidden 
              flex justify-center
           "
      >
        <Image src={url || picture} alt="foto de perfil" layout="fill" objectFit="cover" />
      </figure>
    </div>
  );
};

export default ProfilePicture;
