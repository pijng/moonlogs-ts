import localVarRequest from 'request';

export * from './apiToken';
export * from './credentials';
export * from './level';
export * from './meta';
export * from './model200Response';
export * from './model200Response1';
export * from './model200Response10';
export * from './model200Response11';
export * from './model200Response12';
export * from './model200Response13';
export * from './model200Response2';
export * from './model200Response3';
export * from './model200Response4';
export * from './model200Response5';
export * from './model200Response6';
export * from './model200Response7';
export * from './model200Response8';
export * from './model200Response9';
export * from './record';
export * from './recordLevel';
export * from './role';
export * from './schema';
export * from './schemaField';
export * from './schemaKind';
export * from './schemaSearch';
export * from './session';
export * from './tag';
export * from './user';
export * from './userRole';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ApiToken } from './apiToken';
import { Credentials } from './credentials';
import { Level } from './level';
import { Meta } from './meta';
import { Model200Response } from './model200Response';
import { Model200Response1 } from './model200Response1';
import { Model200Response10 } from './model200Response10';
import { Model200Response11 } from './model200Response11';
import { Model200Response12 } from './model200Response12';
import { Model200Response13 } from './model200Response13';
import { Model200Response2 } from './model200Response2';
import { Model200Response3 } from './model200Response3';
import { Model200Response4 } from './model200Response4';
import { Model200Response5 } from './model200Response5';
import { Model200Response6 } from './model200Response6';
import { Model200Response7 } from './model200Response7';
import { Model200Response8 } from './model200Response8';
import { Model200Response9 } from './model200Response9';
import { Record } from './record';
import { RecordLevel } from './recordLevel';
import { Role } from './role';
import { Schema } from './schema';
import { SchemaField } from './schemaField';
import { SchemaKind } from './schemaKind';
import { SchemaSearch } from './schemaSearch';
import { Session } from './session';
import { Tag } from './tag';
import { User } from './user';
import { UserRole } from './userRole';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Level": Level,
        "Role": Role,
}

let typeMap: {[index: string]: any} = {
    "ApiToken": ApiToken,
    "Credentials": Credentials,
    "Meta": Meta,
    "Model200Response": Model200Response,
    "Model200Response1": Model200Response1,
    "Model200Response10": Model200Response10,
    "Model200Response11": Model200Response11,
    "Model200Response12": Model200Response12,
    "Model200Response13": Model200Response13,
    "Model200Response2": Model200Response2,
    "Model200Response3": Model200Response3,
    "Model200Response4": Model200Response4,
    "Model200Response5": Model200Response5,
    "Model200Response6": Model200Response6,
    "Model200Response7": Model200Response7,
    "Model200Response8": Model200Response8,
    "Model200Response9": Model200Response9,
    "Record": Record,
    "RecordLevel": RecordLevel,
    "Schema": Schema,
    "SchemaField": SchemaField,
    "SchemaKind": SchemaKind,
    "SchemaSearch": SchemaSearch,
    "Session": Session,
    "Tag": Tag,
    "User": User,
    "UserRole": UserRole,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
