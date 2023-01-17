import { ContactModelType } from "../type/types";

export class ContactModel implements ContactModelType {
  clientManager: string;
  contactAddress: string;
  askTheme: string;
  priority: string;
  content: string;

  constructor(model: ContactModelType) {
    this.clientManager = model.clientManager;
    this.contactAddress = model.contactAddress;
    this.askTheme = model.askTheme;
    this.priority = model.priority;
    this.content = model.content;
  }
}
