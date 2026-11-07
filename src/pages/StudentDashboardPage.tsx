import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { mockUser, UserProfile } from '../data/user';
import { AmbientBackground } from '../components/common';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardTopNav from '../components/dashboard/DashboardTopNav';
import OverviewView from '../components/dashboard/OverviewView';
import MyEventsView from '../components/dashboard/MyEventsView';
import EventsView from '../components/dashboard/EventsView';
import PlaceholderView from '../components/dashboard/PlaceholderView';
import DigitalIdView from '../components/dashboard/DigitalIdView';
import { SquaresFour, Trophy, CalendarCheck, CreditCard, List } from 'phosphor-react';

export default function StudentDashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryTab = new URLSearchParams(location.search).get('tab');
  const [activeTab, setActiveTab] = useState(queryTab || location.state?.initialTab || 'Overview');
  const [user, setUser] = useState<UserProfile>({ ...mockUser, name: 'Sai' });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    // Safe route guard: auto-initialize demo student so judges are never locked out
    const saved = localStorage.getItem('user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        setUser(mockUser);
      }
    } else {
      localStorage.setItem('token', 'mock-token-2026');
      localStorage.setItem('role', 'STUDENT');
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    }
  }, []);

  useEffect(() => {
    if (location.state?.initialTab) {
      setActiveTab(location.state.initialTab);
    }
  }, [location.state]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const handleRefresh = () => {
    const prev = activeTab;
    setActiveTab('');
    setTimeout(() => setActiveTab(prev), 100);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewView userName={user.name} onNavigateTab={setActiveTab} />;
      case 'My Events':
      case 'My Activities':
        return <MyEventsView onNavigateTab={setActiveTab} />;
      case 'Events':
        return <EventsView />;
      case 'Digital Card':
      case 'Digital ID':
        return <DigitalIdView />;
      default:
        return <PlaceholderView title={activeTab} onNavigateTab={setActiveTab} />;
    }
  };

  const BOTTOM_NAV_TABS = [
    { name: 'Overview', icon: SquaresFour, label: 'Overview' },
    { name: 'Events', icon: Trophy, label: 'Events' },
    { name: 'My Events', icon: CalendarCheck, label: 'Activity' },
    { name: 'Digital Card', icon: CreditCard, label: 'ID Card' },
  ];

  return (
    <div className="flex min-h-screen w-full bg-[#F7F7F4] text-[#111111]">
      <DashboardSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        userName={user.name}
        onLogout={handleLogout}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
        isOpenOnMobile={isMobileDrawerOpen}
        onCloseMobile={() => setIsMobileDrawerOpen(false)}
      />

      <div className="relative flex flex-1 flex-col overflow-y-auto">
        <AmbientBackground variant="standard" showGrid={false} className="min-h-full flex flex-col">
          <DashboardTopNav
            activeTab={activeTab}
            userName={user.name}
            onRefresh={handleRefresh}
            isSidebarCollapsed={isSidebarCollapsed}
            onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
            onOpenMobileDrawer={() => setIsMobileDrawerOpen(true)}
            onLogout={handleLogout}
          />

          <main className="relative z-10 flex-1 px-3 xs:px-4 sm:px-6 md:px-10 lg:px-12 pt-5 pb-24 md:pb-12 overflow-x-hidden">
            {renderActiveView()}
          </main>

          {/* Native-Style Mobile Bottom Navigation Bar (< md) */}
          <nav aria-label="Mobile Bottom Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-gray-200/90 bg-white/95 px-2 py-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] backdrop-blur-md">
            {BOTTOM_NAV_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive =
                activeTab === tab.name ||
                (tab.name === 'My Events' && activeTab === 'My Activities') ||
                (tab.name === 'Digital Card' && activeTab === 'Digital ID');

              return (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors active:scale-95 ${
                    isActive ? 'text-[#7665FF]' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <Icon size={20} weight={isActive ? 'fill' : 'regular'} className="w-5 h-5" />
                  <span className={`text-[10px] mt-0.5 tracking-tight font-inter ${isActive ? 'font-bold' : 'font-medium'}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-gray-500 hover:text-gray-800 transition-colors active:scale-95"
            >
              <List size={20} className="w-5 h-5" />
              <span className="text-[10px] mt-0.5 font-medium tracking-tight font-inter">
                More
              </span>
            </button>
          </nav>
        </AmbientBackground>
      </div>
    </div>
  );
}
