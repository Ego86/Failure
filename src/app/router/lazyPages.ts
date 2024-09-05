import { lazy } from "react"

export const Home = lazy(() => import("@/pages/home/ui/page"!))
export const Login = lazy(() => import("@/pages/auth/login/index"!))