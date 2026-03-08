import React, { createContext, useState } from "react";

interface IContext {
  mode: boolean;
  setMode: (mode: boolean) => void;
  skills: { id: number; name: string }[];
}

export interface IAbout {
  title: string;
<<<<<<< HEAD
  textOne: string;
  textTwo?: string;
  textThree?: string;
}

export interface IVeille {
  title: string;
  textOne: string;
  textTwo?: string;
  textThree?: string;
  textFour?: string;
=======
  textOne: string | React.ReactNode;
  textTwo?: string | React.ReactNode;
>>>>>>> 73c7f8e79658ac2e4ee0ecab7c1f8a3ec8a12650
}

export interface IProject {
  projectName: string;
  projectInformations: string;
  elementClassName?: string;
<<<<<<< HEAD
  compteRenduLink?: string;
  modeOperatoireLink?: string;
  image?: string;
  projectSkills: {id: number, name: string}[];
=======
  link: string;
  tags?: string[]
>>>>>>> 73c7f8e79658ac2e4ee0ecab7c1f8a3ec8a12650
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
<<<<<<< HEAD
    { id: 0, name: "HTML" },
    { id: 1, name: "CSS" },
    { id: 2, name: "Javascript" },
    { id: 2, name: "Figma" },
    { id: 5, name: "Python" },
    { id: 6, name: "SQL" },
    { id: 7, name: "Excel" },
    { id: 8, name: "PowerBI" },
=======
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
>>>>>>> 73c7f8e79658ac2e4ee0ecab7c1f8a3ec8a12650
  ];

  return <AppContext.Provider value={{ mode, setMode, skills }}> {children} </AppContext.Provider>;
}
