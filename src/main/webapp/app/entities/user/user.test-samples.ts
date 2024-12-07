import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 5647,
  login: '-2e9L',
};

export const sampleWithPartialData: IUser = {
  id: 32489,
  login: 'E',
};

export const sampleWithFullData: IUser = {
  id: 25562,
  login: 'va',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
