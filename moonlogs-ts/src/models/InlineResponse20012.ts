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
import {
    Tag,
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './Tag';

/**
 * 
 * @export
 * @interface InlineResponse20012
 */
export interface InlineResponse20012 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse20012
     */
    success: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20012
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20012
     */
    error: string;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof InlineResponse20012
     */
    data: Array<Tag>;
    /**
     * 
     * @type {Meta}
     * @memberof InlineResponse20012
     */
    meta: Meta;
}

export function InlineResponse20012FromJSON(json: any): InlineResponse20012 {
    return InlineResponse20012FromJSONTyped(json, false);
}

export function InlineResponse20012FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse20012 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'code': json['code'],
        'error': json['error'],
        'data': ((json['data'] as Array<any>).map(TagFromJSON)),
        'meta': MetaFromJSON(json['meta']),
    };
}

export function InlineResponse20012ToJSON(value?: InlineResponse20012 | null): any {
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
        'data': ((value.data as Array<any>).map(TagToJSON)),
        'meta': MetaToJSON(value.meta),
    };
}

