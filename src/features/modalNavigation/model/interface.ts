import {  LucideProps } from "lucide-react";




export interface ILinkModalNav {
  url: string;
  name: string;
  Icon:  React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> ;
}
export interface IPropsModelNavigation {
  isActive: boolean;
}