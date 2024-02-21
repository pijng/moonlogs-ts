/**
 * Moonlogs
 * Moonlogs API
 *
 * OpenAPI spec version: 0.5.11
 * Contact: shalpack@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiToken } from './ApiToken';
import { Meta } from './Meta';
import { HttpFile } from '../http/http';

export class InlineResponse20010 {
    'success': boolean;
    'code': number;
    'error': string;
    'data': ApiToken;
    'meta': Meta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ApiToken",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "Meta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20010.attributeTypeMap;
    }

    public constructor() {
    }
}

