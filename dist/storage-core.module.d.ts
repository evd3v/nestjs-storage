import { DynamicModule } from '@nestjs/common';
import { StorageModuleOptions } from './interfaces';
import { ModuleRef } from '@nestjs/core';
import { StorageModuleAsyncOptions } from './interfaces/storage-module-async-options';
export declare class StorageCoreModule {
  private readonly options;
  private readonly moduleRef;
  constructor(options: StorageModuleOptions, moduleRef: ModuleRef);
  static forRoot(options: StorageModuleOptions): DynamicModule;
  static forRootAsync(options: StorageModuleAsyncOptions): DynamicModule;
  private static createAsyncProviders;
  private static createAsyncOptionsProvider;
}
