export type LocationObject = {
  id: string;
  name: string;
  p_code: string;
  parent: string;
  admin_level_name: string;
  admin_level: number;
};

export interface AdminLevel {
  id: number;
  name: string;
  admin_level: string | null;
  created: string;
  modified: string;
}
