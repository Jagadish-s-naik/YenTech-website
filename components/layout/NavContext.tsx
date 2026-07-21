"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavContextType {
  activeDropdown: string | null;
  setActiveDropdown: (name: string | null) => void;
}

const NavContext = createContext<NavContextType>({
  activeDropdown: null,
  setActiveDropdown: () => {},
});

export function NavProvider({ children }: { children: ReactNode }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  return (
    <NavContext.Provider value={{ activeDropdown, setActiveDropdown }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  return useContext(NavContext);
}
