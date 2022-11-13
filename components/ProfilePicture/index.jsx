import React from "react";
import Image from "next/image";

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
        <Image
          src={url || "https://lh3.googleusercontent.com/a/ALm5wu29CN4UC9sUy_F7XVCmac7MmQ_0RXDwepXzFVk0JQ=s96-c"}
          alt="foto de perfil"
          layout="fill"
          objectFit="cover"
        />
      </figure>
    </div>
  );
};

export default ProfilePicture;