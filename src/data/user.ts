export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'STUDENT';
  campus_code_id: string;
  avatar_initials: string;
}

export const mockUser: UserProfile = {
  id: 'usr_2026_01',
  name: 'Sai',
  email: 'sai@campuscode.co.in',
  role: 'STUDENT',
  campus_code_id: 'CC-2026-8492',
  avatar_initials: 'S',
};
