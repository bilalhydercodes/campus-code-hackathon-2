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
    title: "ReBuild '26 Round 1 Underway",
    body: 'Recreate the 4 pages faithfully. Deadline is tonight at 10:00 PM IST.',
    created_at: '2 hours ago',
    is_read: false,
  },
  {
    id: 'notif_2',
    title: 'Rules Document v8 Released',
    body: 'Check the updated schedule and brand guidelines in your student portal.',
    created_at: '5 hours ago',
    is_read: false,
  },
  {
    id: 'notif_3',
    title: 'Verification Form Required',
    body: 'Submit your CampusCode verification details before the submission window closes.',
    created_at: '1 day ago',
    is_read: true,
  },
];
