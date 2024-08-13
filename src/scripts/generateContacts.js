import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    // Читаємо існуючі дані з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    // Перевіряємо, чи є contacts масивом. Якщо ні, створюємо новий масив
    if (!Array.isArray(contacts)) {
      contacts = [];
    }
    // Генеруємо нові контакти
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    // Записуємо оновлені дані назад у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Sucsessful add ${number} contacts`);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
