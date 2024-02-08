import { DynamicModule } from '@nestjs/common';
import { StorageModuleOptions } from './interfaces';
import { StorageModuleAsyncOptions } from './interfaces/storage-module-async-options';
export declare class StorageModule {
  static forRoot(options: StorageModuleOptions): DynamicModule;
  static forRootAsync(options: StorageModuleAsyncOptions): DynamicModule;
}
