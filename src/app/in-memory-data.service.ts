import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 11, name: 'Billy', phone: 1231231234 },
      { id: 12, name: 'Rosco', phone: 1231231234 },
      { id: 13, name: 'Terry', phone: 1231231234 },
      { id: 14, name: 'Stephen', phone: 1231231234 },
      { id: 15, name: 'Nat', phone: 1231231234 },
      { id: 16, name: 'Natalie', phone: 1231231234 },
      { id: 17, name: 'Chris', phone: 1231231234 },
      { id: 18, name: 'Leroy', phone: 1231231234 },
      { id: 19, name: 'Magma', phone: 1231231234 },
      { id: 20, name: 'Lamar', phone: 1231231234 }
    ];
    return {contacts};
  }
}