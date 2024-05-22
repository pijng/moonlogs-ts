/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Level } from './Level';
export type RecordResponse = {
    id: number;
    text: string;
    schema_name: string;
    schema_id: number;
    query: any;
    request: any;
    response: any;
    kind: string;
    /**
     * ISO8601 date-time
     */
    created_at: string;
    group_hash: string;
    level: Level;
    is_exposed: boolean;
};

