import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esto hace que cada vez que cambie la ruta, el scroll suba al inicio
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}