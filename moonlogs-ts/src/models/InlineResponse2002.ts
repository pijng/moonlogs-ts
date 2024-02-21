/* tslint:disable */
/* eslint-disable */
/**
 * Moonlogs
 * Moonlogs API
 *
 * The version of the OpenAPI document: 0.5.9
 * Contact: shalpack@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Meta,
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
} from './Meta';

/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2002
     */
    success: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002
     */
    error: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002
     */
    data: number;
    /**
     * 
     * @type {Meta}
     * @memberof InlineResponse2002
     */
    meta: Meta;
}

export function InlineResponse2002FromJSON(json: any): InlineResponse2002 {
    return InlineResponse2002FromJSONTyped(json, false);
}

export function InlineResponse2002FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2002 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'code': json['code'],
        'error': json['error'],
        'data': json['data'],
        'meta': MetaFromJSON(json['meta']),
    };
}

export function InlineResponse2002ToJSON(value?: InlineResponse2002 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'code': value.code,
        'error': value.error,
        'data': value.data,
        'meta': MetaToJSON(value.meta),
    };
}

