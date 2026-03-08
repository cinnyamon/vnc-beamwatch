import { useEffect } from "react";

export const useSession = () => {
  const callPerms = async () => {
    console.log("hit the session thing");
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;
    const res = await fetch(BASE_URL + "/container/permissions");
    const parsed = await res.json();

    console.log(parsed);
  };

  return { callPerms };
};
