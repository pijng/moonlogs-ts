/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from './Role';
export type UserRequest = {
    name: string;
    email: string;
    password: string;
    password_digest?: string;
    role: Role;
    tags?: Array<number>;
    token?: string;
    is_revoked?: boolean;
};

