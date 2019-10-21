import { Item } from '../models/item.model';

export interface Donation {
    dateReceived : String;
    itemsDonated : Item[];
    donationId? : Number;
    donorName: String;
    donorEmail: String;
    donorAddress: String;
    donationWeight: Number;
}