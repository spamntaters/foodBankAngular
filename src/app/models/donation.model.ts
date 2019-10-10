import { Item } from './item.model';

export class Donation {
    donationId: Number;
    dateReceived: String;
    itemsDonated: Item[];
    donorName: String;
    donorEmail: String;
    donorAddress: String;
    donationWeight: Number;
}