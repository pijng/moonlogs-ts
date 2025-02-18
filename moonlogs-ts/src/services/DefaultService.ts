/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionRequest } from '../models/ActionRequest';
import type { ActionResponse } from '../models/ActionResponse';
import type { ApiTokenRequest } from '../models/ApiTokenRequest';
import type { ApiTokenResponse } from '../models/ApiTokenResponse';
import type { Credentials } from '../models/Credentials';
import type { IncidentResponse } from '../models/IncidentResponse';
import type { IncidentSearchRequest } from '../models/IncidentSearchRequest';
import type { Meta } from '../models/Meta';
import type { RecordRequest } from '../models/RecordRequest';
import type { RecordResponse } from '../models/RecordResponse';
import type { SchemaRequest } from '../models/SchemaRequest';
import type { SchemaResponse } from '../models/SchemaResponse';
import type { Session } from '../models/Session';
import type { TagRequest } from '../models/TagRequest';
import type { TagResponse } from '../models/TagResponse';
import type { UserRequest } from '../models/UserRequest';
import type { UserResponse } from '../models/UserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any
     * @throws ApiError
     */
    public getSchemas(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<SchemaResponse>;
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
    public createSchema({
        requestBody,
    }: {
        requestBody?: SchemaRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: SchemaResponse;
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
    public getSchemaById({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: SchemaResponse;
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
    public updateSchemaById({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: SchemaRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: SchemaResponse;
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
    public deleteSchemaById({
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
    public createLog({
        requestBody,
    }: {
        requestBody?: RecordRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: RecordResponse;
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
    public getLog({
        page,
        limit,
    }: {
        page?: number,
        limit?: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<RecordResponse>;
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
    public getLogById({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: RecordResponse;
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
    public getLogsBySchemaAndHash({
        schemaName,
        hash,
    }: {
        schemaName: string,
        hash: string,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<RecordResponse>;
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
    public searchLogs({
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
        requestBody?: RecordRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<RecordResponse>;
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
    public getUsers(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<UserResponse>;
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
    public createUser({
        requestBody,
    }: {
        requestBody?: UserRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: UserResponse;
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
    public getUserById({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: UserResponse;
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
    public deleteUserById({
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
    public updateUserById({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: UserRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: UserResponse;
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
    public getSession(): CancelablePromise<{
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
    public createSession({
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
     * @returns UserResponse
     * @throws ApiError
     */
    public registerAdmin({
        requestBody,
    }: {
        requestBody?: UserRequest,
    }): CancelablePromise<UserResponse> {
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
    public getTokens(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<ApiTokenResponse>;
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
    public createToken({
        requestBody,
    }: {
        requestBody?: ApiTokenRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: ApiTokenResponse;
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
    public getTokenById({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: ApiTokenResponse;
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
    public updateTokenById({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: ApiTokenRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: ApiTokenResponse;
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
    public deleteTokenById({
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
    public getTags(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<TagResponse>;
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
    public createTag({
        requestBody,
    }: {
        requestBody?: TagRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: TagResponse;
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
    public getTagById({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: TagResponse;
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
    public updateTagById({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: TagRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: TagResponse;
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
    public deleteTagById({
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
    /**
     * @returns any
     * @throws ApiError
     */
    public createLogAsync({
        requestBody,
    }: {
        requestBody?: RecordRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: string;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/logs/async',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getLogRequestById({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/logs/{id}/request',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getLogResponseById({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/logs/{id}/response',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public exposeRecordById({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: string;
        code: number;
        error: string;
        data: RecordResponse;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/logs/{id}/expose',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public coverRecordById({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        success: string;
        code: number;
        error: string;
        data: RecordResponse;
        meta: RecordResponse;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/logs/{id}/cover',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getActions(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<ActionResponse>;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/actions',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public createAction({
        requestBody,
    }: {
        requestBody?: ActionRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: ActionResponse;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/actions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public getActionById(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: ActionResponse;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/actions/{id}',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public deleteActionById(): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        /**
         * Deleted Actions's ID
         */
        data: number;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/actions/{id}',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public updateActionById({
        requestBody,
    }: {
        requestBody?: ActionRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: ActionResponse;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/actions/{id}',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public searchIncidents({
        requestBody,
    }: {
        requestBody?: IncidentSearchRequest,
    }): CancelablePromise<{
        success: boolean;
        code: number;
        error: string;
        data: Array<IncidentResponse>;
        meta: Meta;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/incidents/search',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
