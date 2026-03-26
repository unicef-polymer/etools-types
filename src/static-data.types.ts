export interface LabelAndValue<T = string> {
  label: string;
  value: T;
}

export interface IdAndName<T = string> {
  id: T;
  name: string;
}

export type Section = {
  id: string;
  created: string;
  modified: string;
  name: string;
  description: string;
  alternate_id: null;
  alternate_name: string;
  dashboard: boolean;
  color: string;
  active: boolean;
};

export type Disaggregation = {
  active: boolean;
  disaggregation_values: DisaggregationValue[];
  id: number;
  name: string;
};

export type DisaggregationValue = {
  active: boolean;
  id: number;
  value: string;
};

export interface CpOutput {
  id: number;
  name: string;
  wbs: string;
  country_programme: string;
}

export interface Office {
  id: number;
  name: string;
  email: string;
  username: string;
}

export type CountryProgram = {
  id: number;
  expired: boolean;
  active: boolean;
  special: boolean;
  future: boolean;
  name: string;
  wbs: string;
  invalid: boolean;
  from_date: string;
  to_date: string;
};
