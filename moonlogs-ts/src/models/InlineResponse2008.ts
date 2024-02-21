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
import {
    Session,
    SessionFromJSON,
    SessionFromJSONTyped,
    SessionToJSON,
} from './Session';

/**
 * 
 * @export
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2008
     */
    success: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2008
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2008
     */
    error: string;
    /**
     * 
     * @type {Session}
     * @memberof InlineResponse2008
     */
    data: Session;
    /**
     * 
     * @type {Meta}
     * @memberof InlineResponse2008
     */
    meta: Meta;
}

export function InlineResponse2008FromJSON(json: any): InlineResponse2008 {
    return InlineResponse2008FromJSONTyped(json, false);
}

export function InlineResponse2008FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2008 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'code': json['code'],
        'error': json['error'],
        'data': SessionFromJSON(json['data']),
        'meta': MetaFromJSON(json['meta']),
    };
}

export function InlineResponse2008ToJSON(value?: InlineResponse2008 | null): any {
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
        'data': SessionToJSON(value.data),
        'meta': MetaToJSON(value.meta),
    };
}

