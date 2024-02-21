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
 * @interface InlineResponse20011
 */
export interface InlineResponse20011 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse20011
     */
    success: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20011
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20011
     */
    error: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20011
     */
    data: number;
    /**
     * 
     * @type {Meta}
     * @memberof InlineResponse20011
     */
    meta: Meta;
}

export function InlineResponse20011FromJSON(json: any): InlineResponse20011 {
    return InlineResponse20011FromJSONTyped(json, false);
}

export function InlineResponse20011FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse20011 {
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

export function InlineResponse20011ToJSON(value?: InlineResponse20011 | null): any {
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

