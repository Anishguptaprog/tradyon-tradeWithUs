/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
  _id: string;  
  ProductName: string;
  Origin: string;
  PackingDetails: string;
  Price?: number;
  Forecast: string;
  Colour: string;
  CultivationType: string;
  Moisture: string;
  FormAndCut: string;
  Image: string;
}

export interface Profile {
  Image: any;
  Origin?: string;
  FormAndCut?: string;
  Moisture?: string;
  Colour?: string;
  CultivationType?: string;
  Type: string | number | readonly string[] | undefined;
  Size: string | number | readonly string[] | undefined;
  Founded: string | number | readonly string[] | undefined;
  Employees: string | number | readonly string[] | undefined;
  Location: string | number | readonly string[] | undefined;
  ExportPercentage: string | number | readonly string[] | undefined;
  ExportCountries: any;
  _id: string; 
  BusinessName: string;
  BusinessOverview: string;
  BusinessType: string;
  Established: string;
  Address: string;
  Logo: string;
  LogoUrl?: string;
  Owner: string;
}