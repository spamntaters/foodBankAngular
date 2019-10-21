import { Item } from './item.model';

export class Donation {
    donationId: Number;
    dateRecieved: String;
    itemsDonated: Item[];
    donorName: String;
    donorEmail: String;
    donorAddress: String;
    donationWeight: Number;
}