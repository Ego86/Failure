import { LogOut, User, Users } from "lucide-react";
import { IListComponents} from "./interface";

export const listComponents:IListComponents[] = [
    { url: "/profile", title: "profile", Icon: User },
    { url: "/frinds", title: "friends", Icon: Users },
    { url: "/exit", title: "exit", Icon: LogOut },
  ]