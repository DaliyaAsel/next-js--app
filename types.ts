export type AdressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;

}
export type ContactType = {
    id: string;
    name: string;
    email: string;
    address: AdressType;
}

export interface PostType {
    title: string;
    body: string;
}

export type HeadingType = {
    tag?: any;
    text: string;
}