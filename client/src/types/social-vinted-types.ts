export interface Service {
  id: number;
  date: string;
  picture: string;
  title: string;
  description: string;
  service_category_name: string;
  user_name: string;
  location: string;
}

export interface Donation {
  id: number;
  date: string;
  picture: string;
  title: string;
  description: string;
  donation_category_name: string;
  condition_category_name: string;
  user_name: string;
  location: string;
}

export interface DonationCategory {
  id: number;
  name: string;
}

export interface ServiceCategory {
  id: number;
  name: string;
}

export interface Condition {
  id: number;
  name: string;
}
