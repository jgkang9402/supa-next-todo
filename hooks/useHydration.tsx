import { useEffect, useState } from "react";

const useHydration = () => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);
  return isMount;
};
export default useHydration;
