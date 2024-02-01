/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";

export function TwitterCard({
  img,
  name,
  user,
  formatUsername,
}: {
  img: string;
  name: string;
  user: string;
  formatUsername: (user: string) => string;
}) {
  const [isFollowing, setFollowingState] = useState(false);

  const followText = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "bg-white text-black font-medium hover:bg-red-600 hover:text-white hover:delay-100"
    : "bg-white text-black font-medium";

  const handleButton = () => {
    setFollowingState(!isFollowing);
  };

  return (
    <section className="flex h-12 items-center w-64 gap-2">
      <img
        className=" rounded-full h-full "
        src={`https://unavatar.io/${img}`}
        alt="foto de perfil"
      />
      <section className="flex justify-between items-center w-full">
        <article className="flex flex-col text-white">
          <strong className=" text-base ">{name}</strong>
          <label className=" text-sm ">{formatUsername(user)}</label>
        </article>
        <button
          className={`rounded-2xl w-auto pl-2 pr-2 h-8 ${buttonClassName}`}
          onClick={handleButton}
        >
          {followText}
        </button>
      </section>
    </section>
  );
}
