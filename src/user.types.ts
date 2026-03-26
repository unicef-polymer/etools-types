export type EtoolsUser = {
  countries_available: AvailableUserCountry[];
  country: UserCountry;
  preferences: { language: string };
  supervisor: boolean | null;
  groups: UserGroup[];
  organization: UserOrganization;
  organizations_available: UserOrganization[];
  supervisees: any[];
  name: string;
  last_login: string;
  is_superuser: string;
  username: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  is_staff: string;
  is_active: string;
  show_ap: boolean;
  is_unicef_user: boolean;
  guid: any;
  partner_staff_member: any;
  job_title: any;
  phone_number: any;
  staff_id: any;
  org_unit_code: string;
  org_unit_name: string;
  post_number: string;
  post_title: any;
  vendor_number: any;
  user: number;
  country_override: number;
  office: any;
  oic: null;
};

export type AvailableUserCountry = {
  id: number;
  name: string;
  business_area_code: string;
};

export type UserGroup = {
  id: string;
  name: string;
  permissions: number[];
};

export type UserOrganization = {
  id: number;
  name: string;
};

export type UserCountry = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  initial_zoom: number;
  local_currency: string;
};

export type Country = {
  country_short_code: string;
  initial_zoom: number;
  latitude: string;
  local_currency: string;
  local_currency_code: string;
  local_currency_id: number;
  longitude: string;
} & AvailableUserCountry;

export interface MinimalUser {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  name: string;
  email: string;
}

export interface User extends MinimalUser {
  country: AvailableUserCountry;
  country_override: number;
  preferences: { language: string };
  countries_available: AvailableUserCountry[];
  groups: UserGroup[];
  is_unicef_user: boolean;
}
