import { LogOut, User, Users } from "lucide-react";
import { ILinkComponents } from "./interface";

export const listComponents:ILinkComponents[] = [
    { url: "/profile", name: "profile", Icon: User },
    { url: "/frinds", name: "friends", Icon: Users },
    { url: "/exit", name: "exit", Icon: LogOut },
  ]