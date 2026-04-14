import { Outlet, NavLink } from 'react-router-dom'

// TODO: Phase 4+ — replace emoji icons with a proper icon library (e.g. lucide-react)
// TODO: Phase 9 — add smooth tab-switch animations

const NAV_ITEMS = [
  { to: '/',           label: 'Today',      icon: '🏠' },
  { to: '/habits',     label: 'Habits',     icon: '✅' },
  { to: '/stats',      label: 'Stats',      icon: '📊' },
  { to: '/settings',   label: 'Settings',   icon: '⚙️' },
] as const

export default function AppShell() {
  return (
    <div className="flex flex-col min-h-dvh bg-[#0a0a0a]">
      {/* Page content */}
      <main className="flex-1 overflow-y-auto pt-safe scrollbar-none">
        <Outlet />
      </main>

      {/* Bottom navigation */}
      <nav className="border-t border-[#2a2a2a] bg-[#111111] pb-safe">
        <div className="flex items-center justify-around h-14">
          {NAV_ITEMS.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-4 py-1 text-xs transition-colors ${
                  isActive
                    ? 'text-[#a78bfa]'
                    : 'text-[#737373]'
                }`
              }
            >
              <span className="text-lg leading-none">{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
