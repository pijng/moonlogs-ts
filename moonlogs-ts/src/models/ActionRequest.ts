/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Condition } from './Condition';
export type ActionRequest = {
    name: string;
    pattern: string;
    method: string;
    conditions: Array<Condition>;
    schema_name: string;
    schema_id?: number;
    disabled?: boolean;
};

