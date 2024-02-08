import { Storage } from '@slynova/flydrive';
import { StorageModuleOptions } from './interfaces';
export declare class StorageService {
  private options;
  private storageManager;
  constructor(options: StorageModuleOptions);
  getDisk<T extends Storage>(name?: string): T;
  registerDriver(name: string, driver: new (...args: any[]) => Storage): void;
}
