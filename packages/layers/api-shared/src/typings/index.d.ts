import {} from 'aws-sdk';

declare module 'aws-sdk' {
  export const Signers: any;
  export const util: any;
}
