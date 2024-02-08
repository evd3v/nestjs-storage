import {
  AwsS3StorageDisk,
  GoogleGcsStorageDisk,
  LocalStorageDisk,
  StorageDiskConfig,
} from '../interfaces';
export declare type DiskType =
  | AwsS3StorageDisk
  | LocalStorageDisk
  | GoogleGcsStorageDisk
  | StorageDiskConfig;
