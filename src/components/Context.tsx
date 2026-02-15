import React, { createContext, useState } from "react";

interface IContext {
  mode: boolean;
  setMode: (mode: boolean) => void;
  skills: { id: number; name: string }[];
}

export interface IAbout {
  title: string;
  textOne: string | React.ReactNode;
  textTwo?: string | React.ReactNode;
}

export interface IProject {
  projectName: string;
  projectInformations: string;
  elementClassName?: string;
  link: string;
  tags?: string[]
}

const defaultState = {
  mode: false,
  setMode: () => {},
  skills: [],
};

export const AppContext = createContext<IContext>(defaultState);

export function Context({ children }: any) {
  const [mode, setMode] = useState<boolean>(false);

  const skills: { id: number; name: string }[] = [
    { id: 0, name: "Python" },
    { id: 1, name: "SQL" },
    { id: 2, name: "Knime" },
    { id: 3, name: "Power BI" },
    { id: 4, name: "UiPath" },
    { id: 5, name: "Excel" },
    { id: 6, name: "PowerQuery" },
    { id: 7, name: "Git / Github" },
    { id: 8, name: "React" },
    { id: 9, name: "Typescript" }
  ];

  return <AppContext.Provider value={{ mode, setMode, skills }}> {children} </AppContext.Provider>;
}
