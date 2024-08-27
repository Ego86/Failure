import {  LucideProps } from "lucide-react";

export interface ILinkComponents {
  url: string;
  name: string;
  Icon:  React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> ;
}