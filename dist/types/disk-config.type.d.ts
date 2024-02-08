export declare type DiskConfigType =
  | DiskLocalConfigType
  | DiskS3ConfigType
  | DiskGCSConfigType
  | Record<string, any>;
export declare type DiskLocalConfigType = {
  root: string;
};
export declare type DiskS3ConfigType = {
  key: string;
  endpoint: string;
  secret: string;
  bucket: string;
  region: string;
};
export declare type DiskGCSConfigType = {
  keyFilename: string;
  bucket: string;
};
