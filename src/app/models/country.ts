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
