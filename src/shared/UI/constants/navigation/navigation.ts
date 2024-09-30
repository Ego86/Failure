import { LogOut, User, Users } from "lucide-react";
import { IListComponents} from "./interface";

export const listComponents:IListComponents[] = [
    { url: "/profile", title: "profile", Icon: User },
    { url: "/frinds", title: "friends", Icon: Users },
    { url: "/auth", title: "exit", Icon: LogOut },
  ]