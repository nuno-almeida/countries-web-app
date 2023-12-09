export interface User {
    id: string;
  }
  
  export interface Auth {
    isAuthenticated: boolean;
    user: User;
  }
  
  export interface Country {
    name: { common: string };
    capital: string[];
    region: string;
    subregion: string;
    flags: { [key: string]: string };
    id: string,
    isInWishList: boolean;
    isInVisitedList: boolean;
    cca3: string;
  }
  