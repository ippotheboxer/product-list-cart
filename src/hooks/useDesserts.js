import { useEffect, useState } from "react";

function useDesserts() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    async function getDesserts() {
      const req = await fetch("data.json");
      const res = await req.json();
      console.log(res);
      setDesserts(res);
    }

    getDesserts();
  }, []);

  return desserts;
}

export default useDesserts;