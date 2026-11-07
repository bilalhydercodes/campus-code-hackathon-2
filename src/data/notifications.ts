export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  created_at: string;
  is_read: boolean;
}

export const mockNotifications: NotificationItem[] = [
  {
    id: 'notif_1',
    title: 'Round is Live',
    body: "Hello students ReBuild'26 hackthon round 1 is Live . You can submit your live demo + GitHub before 10pm toady",
    created_at: 'Nov 06, 2026',
    is_read: false,
  },
  {
    id: 'notif_2',
    title: 'Create your team',
    body: 'hello guys when you join the event using invite code you need to create a team . to create team go to hackmate ai select rebuild hackthon then create your team name',
    created_at: 'Nov 06, 2026',
    is_read: false,
  },
];
