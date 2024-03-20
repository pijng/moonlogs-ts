/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SchemaField } from './SchemaField';
import type { SchemaKind } from './SchemaKind';
export type SchemaResponse = {
    id: number;
    title: string;
    description?: string;
    name: string;
    fields: Array<SchemaField>;
    kinds: Array<SchemaKind>;
    tag_id?: number;
    retention_days?: number;
};

