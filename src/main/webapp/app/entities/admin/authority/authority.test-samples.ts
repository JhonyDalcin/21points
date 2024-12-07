import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '2e1683c8-01c2-4166-9724-de26ca1c7e97',
};

export const sampleWithPartialData: IAuthority = {
  name: '6ed2ac7a-af3f-4dde-979f-eb105b64d798',
};

export const sampleWithFullData: IAuthority = {
  name: 'c550e1c1-79e5-4f93-9acf-321d880c1819',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
