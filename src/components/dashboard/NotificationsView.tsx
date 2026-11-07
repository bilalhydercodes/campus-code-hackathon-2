import { useState, useEffect } from 'react';
import { mockNotifications, NotificationItem } from '../../data/notifications';
import { BellNotify } from '../ui/bell-notify';
import {
  RefreshCw,
  CheckCircle2,
  Calendar,
  Radio,
  Check,
  ChevronRight
} from 'lucide-react';

interface NotificationsViewProps {
  userName?: string;
  onNavigateTab?: (tab: string) => void;
}

export default function NotificationsView({
  userName = 'Mahammad Bilal Hyder',
  onNavigateTab,
}: NotificationsViewProps) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(mockNotifications);
  const [filter, setFilter] = useState<'UNREAD' | 'ALL'>('UNREAD');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Notifications ON/OFF state driven directly by the bell
  const [isNotificationsOn, setIsNotificationsOn] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('campuscode_notifications_enabled');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('campuscode_notifications_enabled', JSON.stringify(isNotificationsOn));
    } catch (e) {
      console.error(e);
    }
  }, [isNotificationsOn]);

  const unreadCount = notifications.filter((n) => !n.is_read).length;
  const totalCount = notifications.length;

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, is_read: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setNotifications(mockNotifications);
      setIsRefreshing(false);
    }, 400);
  };

  const displayedNotifications =
    filter === 'UNREAD'
      ? notifications.filter((n) => !n.is_read)
      : notifications;

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-12 select-none">
      {/* Top Breadcrumb & User Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 font-mono uppercase tracking-wider text-gray-500">
          <span>CAMPUSCODE</span>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <span className="font-bold text-gray-900">STUDENT</span>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <span className="font-bold text-purple-600">NOTIFICATIONS</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleRefresh}
            className="flex items-center gap-1.5 font-mono text-xs font-bold text-gray-600 hover:text-gray-900 cursor-pointer uppercase transition-colors"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin text-purple-600' : ''}`} />
            <span>REFRESH</span>
          </button>
          <span className="text-gray-300">|</span>
          <button
            type="button"
            onClick={() => onNavigateTab?.('Profile')}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold text-gray-800 shadow-2xs hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
              {userName.charAt(0)}
            </span>
            <span>{userName}</span>
          </button>
        </div>
      </div>

      {/* Main Header Card featuring ONLY OUR BELL */}
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-purple-600 uppercase tracking-widest">
                ALERTS / BACKEND DATA
              </span>
            </div>
            <div className="mt-1 flex items-center gap-3">
              <h1 className="text-3xl font-black tracking-tight text-gray-900 font-inter">
                NOTIFICATIONS.
              </h1>
              {unreadCount > 0 && isNotificationsOn && (
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs font-black text-white shadow-xs">
                  {unreadCount}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              Only unread notifications are shown by default. Mark them read as you go.
            </p>
          </div>

          {/* ONLY OUR BELL (No extra buttons: clicking the bell directly toggles notifications on/off) */}
          <div className="shrink-0 flex items-center justify-center">
            <div
              className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg border border-black/15 bg-black"
              title="Click the bell to toggle notifications ON / OFF"
            >
              <BellNotify
                isOn={isNotificationsOn}
                onToggle={(next) => setIsNotificationsOn(next)}
                size={210}
                showButton={false}
              />
            </div>
          </div>
        </div>

        {/* Stats, Filters & Mark All Controls Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Live Data Indicator */}
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-800">
              <span className="relative flex h-2 w-2">
                {isNotificationsOn ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </>
                ) : (
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
                )}
              </span>
              <span>{isNotificationsOn ? '02 LIVE DATA' : 'NOTIFICATIONS MUTED'}</span>
            </div>

            {/* Filter Pills */}
            <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
              <button
                type="button"
                onClick={() => setFilter('UNREAD')}
                className={`rounded-md px-3 py-1 text-xs font-black uppercase transition-all cursor-pointer ${
                  filter === 'UNREAD'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                UNREAD {unreadCount}
              </button>
              <button
                type="button"
                onClick={() => setFilter('ALL')}
                className={`rounded-md px-3 py-1 text-xs font-black uppercase transition-all cursor-pointer ${
                  filter === 'ALL'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                ALL {totalCount}
              </button>
            </div>
          </div>

          {/* Mark All As Read Button */}
          {unreadCount > 0 && isNotificationsOn && (
            <button
              type="button"
              onClick={handleMarkAllAsRead}
              className="flex items-center gap-1.5 font-mono text-xs font-extrabold text-purple-700 hover:text-purple-900 cursor-pointer uppercase transition-colors"
            >
              <Check className="h-3.5 w-3.5 stroke-[3]" />
              <span>MARK ALL AS READ ✓</span>
            </button>
          )}
        </div>
      </div>

      {/* Notifications Cards Feed */}
      <div className="space-y-4">
        {displayedNotifications.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-600 mb-3">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900">All caught up!</h3>
            <p className="mt-1 text-xs text-gray-500">
              No unread alerts at the moment. Switch filter to "ALL" to view past updates.
            </p>
          </div>
        ) : (
          displayedNotifications.map((notif) => (
            <div
              key={notif.id}
              className={`group relative rounded-2xl border bg-white p-6 transition-all shadow-xs ${
                notif.is_read
                  ? 'border-gray-200 opacity-75'
                  : 'border-black/15 border-l-[6px] border-l-purple-600'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-black tracking-tight text-gray-900">
                      {notif.title}
                    </h2>
                    {!notif.is_read && isNotificationsOn && (
                      <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700 font-medium">
                    {notif.body}
                  </p>
                </div>

                {!notif.is_read && (
                  <button
                    type="button"
                    onClick={() => handleMarkAsRead(notif.id)}
                    className="flex shrink-0 items-center gap-1 rounded-md border border-gray-300 bg-gray-50 px-3 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer uppercase font-mono self-start"
                  >
                    <Check className="h-3 w-3 stroke-[3]" />
                    <span>MARK AS READ</span>
                  </button>
                )}
              </div>

              {/* Timestamp & Tag Footer */}
              <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-3 text-xs text-gray-400 font-medium font-mono">
                <Calendar className="h-3.5 w-3.5 text-gray-400" />
                <span>{notif.created_at}</span>
                {notif.is_read && (
                  <span className="ms-auto font-semibold text-emerald-600">✓ Read</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
