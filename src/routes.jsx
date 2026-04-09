/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import Loader from "@/components/common/loader"
import { ROUTES } from "./constant/routes"
import { Authenticated } from "./layout/authenticated"
import { useSelector } from "react-redux"

function AuthGuard({ children }) {
  const { isAuthenticated, loading } = useSelector((state) => state.auth)
  if (loading) return <Loader fullPage />
  if (!isAuthenticated) return <Navigate to={ROUTES.LOGIN} replace />

  return <>{children}</>
}

function GuestGuard({ children }) {
  const { isAuthenticated, loading } = useSelector((state) => state.auth)

  if (loading) return <Loader fullPage />
  if (isAuthenticated) return <Navigate to={ROUTES.DASHBOARD} replace />

  return <>{children}</>
}

function L({ C }) {
  return (
    <Suspense fallback={<Loader />}>
      <C />
    </Suspense>
  )
}

const LoginPage = lazy(() => import("@/pages/auth/login"))

// Core pages
const DashboardPage = lazy(() => import("@/pages/dashboard"))
const Inquiry = lazy(() => import("@/pages/inquiry"))
const Users = lazy(() => import("@/pages/users"))
const Roles = lazy(() => import("@/pages/roles"))
const RolesAssign = lazy(() => import("@/pages/assignRole"))
const Vendor = lazy(() => import("@/pages/vendors"))
const Reports = lazy(() => import("@/pages/reports"))
const NotFoundPage = lazy(() => import("@/pages/not-found"))

const routes = [
  {
    path: ROUTES.LOGIN,
    element: (
      <GuestGuard>
        <L C={LoginPage} />
      </GuestGuard>
    ),
  },
  // Protected routes with sidebar layout
  {
    path: "/",
    element: (
      <AuthGuard>
        <Authenticated />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.DASHBOARD} replace />,
      },
      {
        path: "dashboard",
        element: <L C={DashboardPage} />,
      },
      {
        path: ROUTES.ROLES,
        element: <L C={Roles} />,
      },
      {
        path: ROUTES.ASSIGN,
        element: <L C={RolesAssign} />,
      },
      {
        path: ROUTES.INQUIRY,
        element: <L C={Inquiry} />,
      },
      {
        path: ROUTES.VENDOR,
        element: <L C={Vendor} />,
      },
      {
        path: ROUTES.REPORTS,
        element: <L C={Reports} />,
      },
      {
        path: ROUTES.USER_MANAGEMENT,
        element: <L C={Users} />,
      },
    ],
  },

  // 404
  {
    path: "*",
    element: <L C={NotFoundPage} />,
  },
]

export const router = createBrowserRouter(routes)
