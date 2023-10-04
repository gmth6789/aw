import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://gm-share-u7949.vm.elestio.app/v1")
  .setProject("651da0b4ec6eaa348eb9"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);