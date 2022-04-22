export type EmptyProps = {};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type Users = User[];

export type DataFromServer = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Users;
};
export type ListingState = {
  page: number; // like this
  items: Users;
  dataIsLoaded: boolean;
  totalPage: number;
  currentPageNo: number;
};
