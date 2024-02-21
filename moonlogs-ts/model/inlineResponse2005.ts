/**
 * Moonlogs
 * Moonlogs API
 *
 * The version of the OpenAPI document: 0.5.10
 * Contact: shalpack@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Meta } from './meta';
import { User } from './user';

export class InlineResponse2005 {
    'success': boolean;
    'code': number;
    'error': string;
    'data': Array<User>;
    'meta': Meta;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<User>"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "Meta"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2005.attributeTypeMap;
    }
}

