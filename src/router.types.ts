export interface RouteQueryParam {
  [key: string]: string;
}
export interface RouteParams {
  [key: string]: number | string;
}

export interface RouteQueryParams {
  [key: string]: string;
}

export interface RouteCallbackParams {
  matchDetails: string[];
  queryParams: RouteQueryParams;
}

export interface RouteDetails {
  routeName: string;
  subRouteName: string | null;
  path: string;
  queryParams: RouteQueryParam | null;
  params: RouteParams | null;
  subSubRouteName?: string;
}
