// scheduleEntity.ts
import { entity, persistence } from 'simpler-state';
import { remoteStorage } from './globalState';

interface Schedule {
  date: string;
  time: string;
}

const defaultSchedule: Schedule[] = [];

export const scheduleEntity = entity<Schedule[]>(defaultSchedule, [
  persistence('schedule', {
    storage: remoteStorage,
    serializeFn: (val) => JSON.stringify(val),
    deserializeFn: (val) => (val === 'null' ? [] : JSON.parse(val)),
  }),
]);

export const addSchedule = (schedule: Schedule) => {
  scheduleEntity.set((prev) => [...prev, schedule]);
};

export const clearSchedule = () => {
  scheduleEntity.set([]);
};

export const useSchedule = () => {
  return scheduleEntity.use();
};
