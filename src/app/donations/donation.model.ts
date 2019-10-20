import { Item } from '../models/item.model';

export class Donation {
    dateRecieved : String;
    itemsDonated : Item[];
    donationId : Number;
    donorName: String;
    donorEmail: String;
    donorAddress: String;
    donationWeight: Number;
}