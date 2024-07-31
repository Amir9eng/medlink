import { entity, persistence } from 'simpler-state';
import { remoteStorage } from './globalState';

interface User {
  firstName: string;
  lastName: string;
  doctor?: boolean;
}

const defaultUser: User = {
  firstName: '',
  lastName: '',
  doctor: false,
};

export const userEntity = entity<User>(defaultUser, [
  persistence('user', {
    storage: remoteStorage,
    serializeFn: (val) => JSON.stringify(val),
    deserializeFn: (val) => (val === 'null' ? {} : JSON.parse(val)),
  }),
]);

export const setUser = (user: User) => {
  userEntity.set(user);
};

export const setFirstName = (firstName: string) => {
  userEntity.set((prev) => ({ ...prev, firstName }));
};

export const setLastName = (lastName: string) => {
  userEntity.set((prev) => ({ ...prev, lastName }));
};

export const setDoctor = (doctor: boolean) => {
  userEntity.set((prev) => ({
    ...prev,
    doctor,
  }));
};

export const useUser = () => {
  const user = userEntity.use();

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    doctor: user.doctor,
  };
};
