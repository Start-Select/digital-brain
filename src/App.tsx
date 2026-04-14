import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import AppShell from '@/components/layout/AppShell'
import TodayPage from '@/features/today/TodayPage'
import HabitsPage from '@/features/habits/HabitsPage'
import CategoriesPage from '@/features/categories/CategoriesPage'
import StatsPage from '@/features/stats/StatsPage'
import SettingsPage from '@/features/settings/SettingsPage'
import LoginPage from '@/features/auth/LoginPage'

// TODO: Phase 3 — replace this with a real auth-aware guard that checks
// Supabase session and redirects unauthenticated users to /login.
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    // All app routes share the AppShell (bottom nav + safe-area wrapper)
    element: (
      <ProtectedRoute>
        <AppShell />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <TodayPage /> },
      { path: 'habits', element: <HabitsPage /> },
      { path: 'categories', element: <CategoriesPage /> },
      { path: 'stats', element: <StatsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  // Fallback — redirect unknown paths to home
  { path: '*', element: <Navigate to="/" replace /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
