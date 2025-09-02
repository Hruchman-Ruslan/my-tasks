export interface University {
  name: string;
  country: string;
  alpha_two_code: string;
  "state-province"?: string;
  domains: string[];
  web_pages: string[];
}

export interface SavedUniversity extends University {
  saved: boolean;
}
