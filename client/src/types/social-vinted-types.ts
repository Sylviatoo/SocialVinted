export interface ServiceFull {
  id: number;
  date: string;
  picture: string;
  title: string;
  description: string;
  service_category_name: string;
  user_name: string;
  location: string;
}

export interface DonationFull {
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
