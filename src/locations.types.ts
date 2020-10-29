export type LocationObject = {
  id: string;
  name: string;
  p_code: string;
  parent: string;
  gateway: AdminLevel;
};

export interface AdminLevel {
  id: number;
  name: string;
  admin_level: string | null;
  created: string;
  modified: string;
}
