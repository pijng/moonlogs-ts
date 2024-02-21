/* tslint:disable */
/* eslint-disable */
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
 * @interface InlineResponse2007
 */
export interface InlineResponse2007 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2007
     */
    success: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2007
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2007
     */
    error: string;
    /**
     * Deleted User's ID
     * @type {number}
     * @memberof InlineResponse2007
     */
    data: number;
    /**
     * 
     * @type {Meta}
     * @memberof InlineResponse2007
     */
    meta: Meta;
}

export function InlineResponse2007FromJSON(json: any): InlineResponse2007 {
    return InlineResponse2007FromJSONTyped(json, false);
}

export function InlineResponse2007FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2007 {
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

export function InlineResponse2007ToJSON(value?: InlineResponse2007 | null): any {
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

