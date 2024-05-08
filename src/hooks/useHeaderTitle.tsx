import React, { useState, useEffect, createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";

// Definimos un tipo para el objeto de estado del título
type TitleState = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
};

// Creamos un contexto para el título
const HeaderTitleContext = createContext<TitleState | null>(null);

// Hook personalizado para obtener el título y la función para establecerlo
export const useHeaderTitle = () => {
  const context = useContext(HeaderTitleContext);
  if (!context) {
    throw new Error("useHeaderTitle must be used within a HeaderTitleProvider");
  }
  return context;
};

// Definimos el tipo para el prop children
interface HeaderTitleProviderProps {
  children: ReactNode;
}

// Componente que proporciona el contexto del título del header
export const HeaderTitleProvider: React.FC<HeaderTitleProviderProps> = ({ children }) => {
  const [title, setTitle] = useState<string>("Home");

  useEffect(() => {
    // Aquí puedes realizar cualquier acción necesaria cuando el título cambie,
    // por ejemplo, cambiar el título de la página
    document.title = `CRM AleFoto - ${title}`;
  }, [title]);

  // Creamos un objeto que contiene el título y la función para establecerlo
  const value = { title, setTitle };

  return (
    <HeaderTitleContext.Provider value={value}>
      {children}
    </HeaderTitleContext.Provider>
  );
};
