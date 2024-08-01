import React, { useLayoutEffect, useState } from "react";

const useWindowResize = () => {
  const [windowSize, setWindowSize]: any = useState({
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useWindowResize;
