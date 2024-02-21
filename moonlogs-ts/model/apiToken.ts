/**
 * Moonlogs
 * Moonlogs API
 *
 * The version of the OpenAPI document: 0.5.8
 * Contact: shalpack@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ApiToken {
    'id': number;
    'token': string;
    'name': string;
    'isRevoked': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "isRevoked",
            "baseName": "is_revoked",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ApiToken.attributeTypeMap;
    }
}

