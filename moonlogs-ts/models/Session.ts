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

import { HttpFile } from '../http/http';

export class Session {
    'token': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Session.attributeTypeMap;
    }

    public constructor() {
    }
}

