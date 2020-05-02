import { tickets } from './tickets.interface';

export interface user {
    id:BigInteger;
    firstName:string;
    lastName:string;
    title:string;
    email:string;
    telephone:string;
    password:string;
    businessUnitId:string;
    created_on:string;
    modified_on:string;
    modified_by:BigInteger;
    tickects:tickets[];
  }