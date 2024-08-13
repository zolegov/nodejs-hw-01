import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);
    contacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('contacts: ', contacts.length);
  } catch (e) {
    console.log(e);
  }
};

removeAllContacts();
