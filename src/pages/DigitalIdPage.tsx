import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUser, UserProfile } from '../data/user';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardTopNav from '../components/dashboard/DashboardTopNav';
import DigitalIdView from '../components/dashboard/DigitalIdView';

export default function DigitalIdPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Digital Card');
  const [user, setUser] = useState<UserProfile>(mockUser);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const handleSelectTab = (tab: string) => {
    if (tab === 'Digital Card') {
      setActiveTab('Digital Card');
    } else {
      navigate('/student', { state: { initialTab: tab } });
    }
  };

  const handleRefresh = () => {
    const prev = activeTab;
    setActiveTab('');
    setTimeout(() => setActiveTab(prev), 100);
  };

  return (
    <div className="flex min-h-screen w-full bg-[#F7F7F4] text-[#111111]">
      <DashboardSidebar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        userName={user.name}
        onLogout={handleLogout}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
        isOpenOnMobile={isMobileDrawerOpen}
        onCloseMobile={() => setIsMobileDrawerOpen(false)}
      />
      <div className="relative flex flex-1 flex-col overflow-y-auto">
        <DashboardTopNav
          activeTab={activeTab}
          userName={user.name}
          onRefresh={handleRefresh}
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
          onOpenMobileDrawer={() => setIsMobileDrawerOpen(true)}
          onLogout={handleLogout}
        />
        <main className="relative z-10 flex flex-1 overflow-hidden p-2 xs:p-4 sm:p-6">
          <DigitalIdView fullscreen />
        </main>
      </div>
    </div>
  );
}
