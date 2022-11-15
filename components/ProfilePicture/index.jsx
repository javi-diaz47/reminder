import React from "react";
import Image from "next/image";
import picture from "../../public/vercel.svg";

const ProfilePicture = ({ url, name, email }) => {
  return (
    <div className="flex gap-2 justify-center flex-col items-center mb-4">
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
      <h2 className="font-bold">{name}</h2>
      <p className="">{email}</p>
    </div>
  );
};

export default ProfilePicture;
