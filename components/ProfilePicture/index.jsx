import React from "react";
import Image from "next/image";
import { supabase } from "../../utils/supabase";

const ProfilePicture = ({ url }) => {
  console.log(url);
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
          src={url || "https://lh3.googleusercontent.com/a/ALm5wu1SIqzsXs5SDWvBtuKBVya79hRc08lR56mY1HmBgA=s96-c"}
          alt="foto de perfil"
          layout="fill"
          objectFit="cover"
        />
      </figure>
    </div>
  );
};

export default ProfilePicture;
