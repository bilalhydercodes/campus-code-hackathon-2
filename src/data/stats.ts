export interface StudentStats {
  registered: number;
  ongoing: number;
  completed: number;
  certificates: number;
}

export const mockStats: StudentStats = {
  registered: 3,
  ongoing: 1,
  completed: 2,
  certificates: 1,
};
