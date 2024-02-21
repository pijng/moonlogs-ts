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
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface InlineResponse2005
 */
export interface InlineResponse2005 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2005
     */
    success: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2005
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2005
     */
    error: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof InlineResponse2005
     */
    data: Array<User>;
    /**
     * 
     * @type {Meta}
     * @memberof InlineResponse2005
     */
    meta: Meta;
}

export function InlineResponse2005FromJSON(json: any): InlineResponse2005 {
    return InlineResponse2005FromJSONTyped(json, false);
}

export function InlineResponse2005FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2005 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'code': json['code'],
        'error': json['error'],
        'data': ((json['data'] as Array<any>).map(UserFromJSON)),
        'meta': MetaFromJSON(json['meta']),
    };
}

export function InlineResponse2005ToJSON(value?: InlineResponse2005 | null): any {
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
        'data': ((value.data as Array<any>).map(UserToJSON)),
        'meta': MetaToJSON(value.meta),
    };
}

