/**
 * Moonlogs
 * Moonlogs API
 *
 * OpenAPI spec version: 0.5.10
 * Contact: shalpack@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Meta } from './Meta';
import { Tag } from './Tag';
import { HttpFile } from '../http/http';

export class InlineResponse20012 {
    'success': boolean;
    'code': number;
    'error': string;
    'data': Array<Tag>;
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
            "type": "Array<Tag>",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "Meta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20012.attributeTypeMap;
    }

    public constructor() {
    }
}

