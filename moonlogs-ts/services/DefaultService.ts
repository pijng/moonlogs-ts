/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiToken } from '../models/ApiToken';
import type { Credentials } from '../models/Credentials';
import type { Meta } from '../models/Meta';
import type { Record } from '../models/Record';
import type { Schema } from '../models/Schema';
import type { Session } from '../models/Session';
import type { Tag } from '../models/Tag';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiSchemas(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<Schema>;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/schemas',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public postApiSchemas({
        requestBody,
    }: {
        requestBody?: Schema,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Schema;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/schemas',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiSchemas1({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Schema;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/schemas/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public putApiSchemas({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: Schema,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Schema;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/schemas/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public deleteApiSchemas({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: number;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/schemas/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public postApiLogs({
        requestBody,
    }: {
        requestBody?: Record,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Record;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/logs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiLogs({
        page,
        limit,
    }: {
        page?: number,
        limit?: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<Record>;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/logs',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiLogs1({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Record;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/logs/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiLogsGroup({
        schemaName,
        hash,
    }: {
        schemaName: string,
        hash: string,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<Record>;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/logs/group/{schema_name}/{hash}',
            path: {
                'schema_name': schemaName,
                'hash': hash,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public postApiLogsSearch({
        page,
        limit,
        from,
        to,
        requestBody,
    }: {
        page?: number,
        limit?: number,
        /**
         * Time in format "YYYY-DD-MMTHH:SS"
         */
        from?: string,
        /**
         * Time in format "YYYY-DD-MMTHH:SS"
         */
        to?: string,
        requestBody?: Record,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<Record>;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/logs/search',
            query: {
                'page': page,
                'limit': limit,
                'from': from,
                'to': to,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiUsers(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<User>;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public postApiUsers({
        requestBody,
    }: {
        requestBody?: User,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: User;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiUsers1({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: User;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public deleteApiUsers({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        /**
         * Deleted User's ID
         */
        data: number;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public putApiUsers({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: User,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: User;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiSession(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Session;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/session',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public postApiSession({
        requestBody,
    }: {
        requestBody?: Credentials,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Session;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/session',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns User
     * @throws ApiError
     */
    public postApiSetupRegisterAdmin({
        requestBody,
    }: {
        requestBody?: User,
    }): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/setup/register_admin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiApiTokens(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<ApiToken>;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/api_tokens',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public postApiApiTokens({
        requestBody,
    }: {
        requestBody?: ApiToken,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: ApiToken;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/api_tokens',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiApiTokens1({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: ApiToken;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/api_tokens/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public putApiApiTokens({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: ApiToken,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: ApiToken;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/api_tokens/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public deleteApiApiTokens({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: number;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/api_tokens/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiTags(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<Tag>;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/tags',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public postApiTags({
        requestBody,
    }: {
        requestBody?: Tag,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Tag;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/tags',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getApiTags1({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Tag;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public putApiTags({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: Tag,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Tag;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/tags/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public deleteApiTags({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: number;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
}
