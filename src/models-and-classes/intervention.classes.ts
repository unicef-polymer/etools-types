import {
  InterventionActivity,
  InterventionAmendment,
  InterventionQuarter,
  ManagementBudget
} from '../intervention.types';
import { ReviewAttachment } from '../attachments.types';
import { Permission } from '../global.types';
import { LocationObject } from '../locations.types';
import { Section } from '../static-data.types';
import { MinimalUser } from '../user.types';

export interface ResultLinkLowerResult {
  // ll_result
  id: number;
  name: string;
  applied_indicators: Indicator[];
  activities: InterventionActivity[];

  code?: string;
  created?: string;
  result_link?: number;
  cp_output: number | null;
  total: string;
}

export interface ExpectedResult {
  id: number;
  code: string;
  cp_output: number;
  cp_output_name: string;
  intervention: number;
  ll_results: ResultLinkLowerResult[];
  ram_indicators: number[];
  ram_indicator_names: string[];
  total: string;
}

export class IndicatorIndicator {
  id: number | null = null;
  title = '';
  display_type = 'percentage';
  unit = 'number';
}

export class Indicator {
  // Indicator
  id: string | null = null;
  code?: string;
  is_active = true;
  is_high_frequency = false;
  indicator: IndicatorIndicator | null = new IndicatorIndicator();
  section: string | null = null;
  baseline: { v?: string | number | null; d?: string | number } = {};
  target: { v?: string | number | null; d: string | number } = { d: '1' };
  means_of_verification: string | null = null;
  locations: string[] = [];
  disaggregation: string[] = [];

  cluster_name: string | null = null;
  cluster_indicator_id: number | null = null;
  cluster_indicator_title: string | null = null;
  created?: string;
  response_plan_name: string | null = null;
  numerator_label = '';
  denominator_label = '';
}

export class PlannedBudget {
  id?: number;
  intervention?: number;
  currency?: string;
  unicef_cash_local?: string;
  in_kind_amount_local?: string;
  total_supply?: string;
  partner_contribution_local?: string;
  partner_contribution_percent?: number;
  programme_effectiveness?: string;
  total_local?: number;
  total_unicef_contribution_local?: number;
  total_cash_local?: number;
  total_hq_cash_local?: number;
  total_unicef_cash_local_wo_hq?: number;
}

export class InterventionAttachment {
  id?: number;
  active = true;
  type?: number;
  intervention?: number;
  attachment_document?: string | number | File;
  [key: string]: undefined | number | string | boolean | File;
}

export class FrsDetails {
  currencies_match = false;
  earliest_start_date: string | null = null;
  frs: Fr[] = [];
  latest_end_date: string | null = null;
  multi_curr_flag = false;
  total_actual_amt = 0;
  total_frs_amt = '0';
  total_intervention_amt = 0;
  total_outstanding_amt = 0;
}

export interface Fr {
  id: number;
  currency: string;
  fr_number: string;
  line_item_details: [];
  end_date: string;
  start_date: string;
  actual_amt: string;
  actual_amt_local: string;
  outstanding_amt: string;
  outstanding_amt_local: string;
  total_amt: string;
  total_amt_local: string;
  vendor_code: string;
}

export class PlannedVisit {
  id: number | null = null;
  year: string | null = null;
  programmatic_q1 = '0';
  programmatic_q2 = '0';
  programmatic_q3 = '0';
  programmatic_q4 = '0';
  programmatic: any;
  [key: string]: any;
}

export class InterventionSupplyItem {
  id: number | null = null;
  created?: string;
  modified?: string;
  title = '';
  unit_number: number | undefined = undefined;
  unit_price: number | undefined = undefined;
  result = '';
  total_price: number | undefined = undefined;
  other_mentions = '';
  unicef_product_number = '';
  intervention = '';
}

export class InterventionPermissionsFields {
  id = false;
  status = false;

  // details - Partnership Information
  agreement = false;
  document_type = false;
  number = false;
  title = false;
  offices = false;
  unicef_focal_points = false;
  partner_focal_points = false;

  // details - PD or SSFA Details
  contingency_pd = false;
  country_programmes = false;
  start = false;
  end = false;
  sections = false;
  flat_locations = false;
  reporting_requirements = false;

  // details - PD Output or SSFA Expected results
  result_links = false;

  // details - Planned Budget
  planned_budget = false;
  planned_budget_unicef_cash = false; // TODO: this should be also received from backend

  // details - Planned Visits
  planned_visits = false;

  technical_guidance = false;
  capacity_development = false;
  other_partners_involved = false;
  other_info = false;

  // review & sign - Signatures & Dates
  submission_date = false;
  submission_date_prc = false;
  review_date_prc = false;
  prc_review_attachment = false;
  partner_authorized_officer_signatory = false;
  signed_by_partner_date = false;
  unicef_signatory = false;
  signed_by_unicef_date = false;
  signed_pd_attachment = false;
  submitted_to_prc = false;

  // review & sign - Amendments
  amendments = false;

  // review & sign - FR Numbers
  frs = false;

  locations = false;

  // attachments
  attachments = false;

  // financial component
  cash_transfer_modalities = false;
  hq_support_cost = false;

  // Supply Agreement
  supply_items = false;

  // Review Tab
  reviews = false;
  prc_reviews = false;

  document_currency = false;
}

export class Intervention {
  id: number | null = null;
  agreement?: number;
  document_type?: string;
  country_programmes?: [];
  number?: string;
  reference_number_year?: string | null = null;
  prc_review_attachment?: number | string;
  signed_pd_attachment?: number | string;
  title?: string;
  status = '';
  start = '';
  end = '';
  budget_owner?: MinimalUser;
  submitted_to_prc = false;
  submission_date_prc?: string;
  review_date_prc?: string;
  final_partnership_review?: ReviewAttachment;
  submission_date?: string;
  signed_by_unicef_date?: string;
  signed_by_partner_date?: string;
  unicef_signatory?: MinimalUser;
  unicef_focal_points: MinimalUser[] = [];
  partner?: string;
  partner_focal_points: MinimalUser[] = [];
  partner_vendor = '';
  partner_authorized_officer_signatory?: MinimalUser;
  offices: [] = [];
  sections: [] = [];
  frs: number[] = [];
  frs_details = new FrsDetails();
  contingency_pd?: boolean;
  planned_budget = new PlannedBudget();
  flat_locations: [] = [];
  result_links: ExpectedResult[] = [];
  planned_visits: PlannedVisit[] = [];
  in_amendment = false;
  in_amendment_date = '';
  amendments: InterventionAmendment[] = [];
  quarters: InterventionQuarter[] = [];
  locations: [] = [];
  // distributions: [];
  activation_letter_attachment: number | string | null = null;
  technical_guidance = '';
  capacity_development = '';
  other_partners_involved = '';
  other_info = '';
  attachments: InterventionAttachment[] = [];
  permissions?: Permission<InterventionPermissionsFields>;
  humanitarian_flag?: boolean;
  partner_id?: string;
  // @lajos: for financial component
  cash_transfer_modalities = '';
  hq_support_cost = '';
  available_actions: string[] = [];
  prgm_effectiveness?: string;
  supply_items: InterventionSupplyItem[] = [];
  risks: RiskData[] = [];
  management_budgets?: ManagementBudget;
  cfei_number?: string;
  status_list: [] = [];
  unicef_court = true;
  unicef_accepted = false;
  partner_accepted = false;
  date_sent_to_partner = '';
  cancel_justification = '';
  date_partnership_review_performed?: string;
  reviews: InterventionReview[] = [];
  original_intervention = '';
  activation_protocol = '';
  sent_back_comment = '';
}

export type RiskData = {
  id: number;
  risk_type: string;
  mitigation_measures: string;
};

export type IndicatorDialogData = {
  indicator: Indicator | null;
  sectionOptions: Section[];
  locationOptions: LocationObject[];
  llResultId: string;
  prpServerOn: boolean;
  readonly: boolean | undefined;
};

export class ListItemIntervention {
  start = '';
  end = '';
  frs_earliest_start_date: string | null = '';
  frs_latest_end_date: string | null = '';
  partner_name?: string = '';
  cp_outputs: number[] = [];
  unicef_budget = 0;
  cso_contribution = 0;
  country_programme?: number;
  title?: string = '';
  status = '';
  number?: string = '';
  offices: [] = [];
  sections: number[] = [];
  section_names: string[] | null = null;
  document_type?: string = '';
  unicef_focal_points: MinimalUser[] = [];
  [key: string]: any;
  partner_accepted?: boolean;
  unicef_accepted?: boolean;
  unicef_court?: boolean;
  date_sent_to_partner?: string;
}

export type InterventionReview = {
  actions_list: string;
  amendment: number;
  budget_is_aligned: string;
  created_date: string;
  ges_considered: string;
  id: number;
  meeting_date: string | null;
  overall_approval: boolean | null;
  overall_approver: MinimalUser | null;
  overall_comment: string;
  partner_comparative_advantage: string;
  pd_is_guided: string;
  pd_is_relevant: string;
  prc_officers: number[];
  relationship_is_represented: string;
  relationships_are_positive: string;
  review_date: string | null;
  review_type: string;
  submitted_by: MinimalUser | null;
  supply_issues_considered: string;
  sent_back_comment: string;
};

export type PrcOfficerReview = {
  budget_is_aligned: string;
  ges_considered: string;
  id: number;
  overall_approval: boolean | null;
  overall_comment: string;
  partner_comparative_advantage: string;
  pd_is_guided: string;
  pd_is_relevant: string;
  relationship_is_represented: string;
  relationships_are_positive: string;
  review_date: string | null;
  supply_issues_considered: string;
  user: MinimalUser;
};
