import { Item } from './item.model';

export interface Donation {
    donationId?: Number;
    dateReceived: String;
    itemsDonated: Item[];
    donorName: String;
    donorEmail: String;
    donorAddress: String;
    donationWeight: Number;
}