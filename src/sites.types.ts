export type Site = {
  id: number;
  is_active: boolean;
  name: string;
  p_code: string;
  parent: ISiteParrentLocation;
  point: GeojsonPoint;
  security_detail: string;
};

export interface ISiteParrentLocation {
  gateway: LocationGateway;
  geo_point: string;
  id: string;
  name: string;
  p_code: string;
  parent: null | ISiteParrentLocation;
}

export type LocationGateway = {
  admin_level: null | string | number;
  id: number;
  name: string;
};

export type GeojsonPoint = {
  coordinates: CoordinatesArray;
  type: 'Point';
};

export type CoordinatesArray = [number, number];
