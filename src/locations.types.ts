<<<<<<< HEAD
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
=======
export type LocationObject = {
  id: string;
  name: string;
  p_code: string;
  parent: string;
  admin_level_name: string;
  admin_level: number;
  is_active?: boolean;
};

export interface AdminLevel {
  id: number;
  name: string;
  admin_level: string | null;
  created: string;
  modified: string;
}
>>>>>>> 2f248cdec3cb884909b278492c6868b8f281a911
