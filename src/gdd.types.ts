export type GDDListData = {
  actual_amount: null;
  all_currencies_are_consistent: boolean;
  budget_currency: null;
  country_programmes: number | null;
  cp_outputs: number[];
  cso_contribution: string;
  document_type: string;
  donor_codes: number[];
  donors: number[];
  end: string | null;
  flagged_sections: number[];
  fr_currencies_are_consistent: boolean | null;
  fr_currency: string;
  frs_earliest_start_date: string | null;
  frs_latest_end_date: string | null;
  frs_total_frs_amt: null;
  frs_total_intervention_amt: null;
  frs_total_outstanding_amt: null;
  grants: [];
  id: number;
  location_p_codes: [];
  metadata: any;
  multi_curr_flag: boolean;
  number: string;
  offices: number[];
  offices_names: string[];
  partner_name: string;
  section_names: string[];
  sections: number[];
  start: string | null;
  status: string;
  title: string;
  total_budget: string;
  total_unicef_budget: string;
  unicef_cash: string;
  unicef_focal_points: number[];
  partner_accepted: boolean;
  unicef_accepted: boolean;
  unicef_court: boolean;
  date_sent_to_partner: string;
};

export type GDDAmendment = {
  id?: number;
  intervention?: number;
  created?: string;
  amendment_number: string | null;
  types: string[];
  other_description: string | null;
  signed_date: string | null;
  signed_amendment_attachment: number | string | null;
  internal_prc_review: number | string | null;
  amended_intervention: string | null;
  signed_by_unicef_date?: string | null;
};

export type GDDComment = {
  id: number;
  related_to: string;
  related_to_description: string;
  state: string;
  text: string;
  user: {
    id: number;
    name: string;
    first_name: string;
    middle_name: string;
    last_name: string;
  };
  users_related: [];
};

export type GDDActivity = {
  id: number;
  code?: any;
  context_details: string;
  cso_cash: string;
  cso_supplies: string;
  items: GDDActivityItem[];
  name: string;
  time_frames: number[];
  unicef_cash: string;
  unicef_suppies: number;
  is_active: boolean;
  created: string;
  ewp_activity: number;
  locations: number[];
};

export type GDDActivityItem = {
  name: string;
  other_details: string;
  unicef_cash: string;
  cso_cash: string;
  unit: string;
  no_units: number;
  unit_price: string;
};

export type GDDActivityTimeframe = GDDQuarter & {
  enabled: boolean;
};

export type GDDQuarter = {
  id: number;
  start: string;
  end: string;
  name: string;
};

export interface GDDResultIndicator {
  current: number;
  id: number;
  name: string;
  result: number;
  sector_current: null | number;
  sector_total: null | number;
  total: null | number;
  unit: null | number;
}

export type GDDManagementBudget = {
  act1_partner: string;
  act1_total: number;
  act1_unicef: string;
  act2_partner: string;
  act2_total: number;
  act2_unicef: string;
  act3_partner: string;
  act3_total: number;
  act3_unicef: string;
  total: number;
  items: GDDManagementBudgetItem[];
};

export type GDDManagementBudgetItem = {
  name: string;
  kind: string;
  unicef_cash: string;
  cso_cash: string;
  unit: string;
  no_units: number;
  unit_price: string;
};
