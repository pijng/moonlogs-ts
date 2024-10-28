/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Level } from './Level';
export type RecordRequest = {
    text: string;
    schema_name: string;
    /**
     * ISO8601 date-time
     */
    created_at?: string;
    schema_id?: number;
    query: any;
    request?: any;
    response?: any;
    kind?: string;
    level?: Level;
    is_exposed?: boolean;
    old_value?: string;
    new_value?: string;
    changes?: any;
};

