import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      try {
        // Intentar leer localStorage
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored) return stored;
      } catch (error) {
        console.log("localStorage no disponible, usando preferencia del sistema");
      }
      
      // Detectar si estamos en una PWA/standalone mode
      const isStandalone = window.matchMedia("(display-mode: standalone)").matches || 
                          (window.navigator as any).standalone === true;
      
      // En modo standalone, preferir light theme por defecto para mejor visibilidad
      if (isStandalone) {
        return "light";
      }
      
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      // Actualizar theme-color para modo oscuro
      updateThemeColor("#1e40af");
    } else {
      root.classList.remove("dark");
      // Actualizar theme-color para modo claro
      updateThemeColor("#3b82f6");
    }
    
    // Guardar en localStorage con error handling
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.log("No se puede guardar en localStorage");
    }
  }, [theme]);

  // Función para actualizar el theme-color meta tag
  const updateThemeColor = (color: string) => {
    try {
      let metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', color);
      }
    } catch (error) {
      console.log("No se puede actualizar theme-color");
    }
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, setTheme, toggleTheme };
}
