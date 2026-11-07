export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'STUDENT';
  campus_code_id: string;
  avatar_initials: string;
  bio?: string;
  username?: string;
  website?: string;
  track?: string;
  avatarUrl?: string;
  coverUrl?: string;
}

export const mockUser: UserProfile = {
  id: 'usr_2026_01',
  name: 'Sai',
  email: 'sai@campuscode.co.in',
  role: 'STUDENT',
  campus_code_id: 'CC-2026-8492',
  avatar_initials: 'S',
  bio: 'Web developer who loves turning ideas into amazing websites!',
  username: 'sai_builder',
  website: 'https://campuscode.co.in',
  track: 'Frontend Specialist',
};
