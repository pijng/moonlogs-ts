import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ApiToken } from '../models/ApiToken';
import { Credentials } from '../models/Credentials';
import { Level } from '../models/Level';
import { Meta } from '../models/Meta';
import { Model200Response } from '../models/Model200Response';
import { Model200Response1 } from '../models/Model200Response1';
import { Model200Response10 } from '../models/Model200Response10';
import { Model200Response11 } from '../models/Model200Response11';
import { Model200Response12 } from '../models/Model200Response12';
import { Model200Response13 } from '../models/Model200Response13';
import { Model200Response2 } from '../models/Model200Response2';
import { Model200Response3 } from '../models/Model200Response3';
import { Model200Response4 } from '../models/Model200Response4';
import { Model200Response5 } from '../models/Model200Response5';
import { Model200Response6 } from '../models/Model200Response6';
import { Model200Response7 } from '../models/Model200Response7';
import { Model200Response8 } from '../models/Model200Response8';
import { Model200Response9 } from '../models/Model200Response9';
import { Record } from '../models/Record';
import { RecordLevel } from '../models/RecordLevel';
import { Role } from '../models/Role';
import { Schema } from '../models/Schema';
import { SchemaField } from '../models/SchemaField';
import { SchemaKind } from '../models/SchemaKind';
import { Session } from '../models/Session';
import { Tag } from '../models/Tag';
import { User } from '../models/User';
import { UserRole } from '../models/UserRole';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     */
    public apiApiTokensGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Model200Response9>> {
        const result = this.api.apiApiTokensGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * 
     */
    public apiApiTokensGet(_options?: Configuration): Promise<Model200Response9> {
        const result = this.api.apiApiTokensGet(_options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiApiTokensIdDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Model200Response11>> {
        const result = this.api.apiApiTokensIdDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiApiTokensIdDelete(id: number, _options?: Configuration): Promise<Model200Response11> {
        const result = this.api.apiApiTokensIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiApiTokensIdGetWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Model200Response10>> {
        const result = this.api.apiApiTokensIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiApiTokensIdGet(id: number, _options?: Configuration): Promise<Model200Response10> {
        const result = this.api.apiApiTokensIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     * @param apiToken 
     */
    public apiApiTokensIdPutWithHttpInfo(id: number, apiToken?: ApiToken, _options?: Configuration): Promise<HttpInfo<Model200Response10>> {
        const result = this.api.apiApiTokensIdPutWithHttpInfo(id, apiToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     * @param apiToken 
     */
    public apiApiTokensIdPut(id: number, apiToken?: ApiToken, _options?: Configuration): Promise<Model200Response10> {
        const result = this.api.apiApiTokensIdPut(id, apiToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param apiToken 
     */
    public apiApiTokensPostWithHttpInfo(apiToken?: ApiToken, _options?: Configuration): Promise<HttpInfo<Model200Response10>> {
        const result = this.api.apiApiTokensPostWithHttpInfo(apiToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param apiToken 
     */
    public apiApiTokensPost(apiToken?: ApiToken, _options?: Configuration): Promise<Model200Response10> {
        const result = this.api.apiApiTokensPost(apiToken, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param page 
     * @param limit 
     */
    public apiLogsGetWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<Model200Response3>> {
        const result = this.api.apiLogsGetWithHttpInfo(page, limit, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param page 
     * @param limit 
     */
    public apiLogsGet(page?: number, limit?: number, _options?: Configuration): Promise<Model200Response3> {
        const result = this.api.apiLogsGet(page, limit, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param schemaName 
     * @param hash 
     */
    public apiLogsGroupSchemaNameHashGetWithHttpInfo(schemaName: string, hash: string, _options?: Configuration): Promise<HttpInfo<Model200Response3>> {
        const result = this.api.apiLogsGroupSchemaNameHashGetWithHttpInfo(schemaName, hash, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param schemaName 
     * @param hash 
     */
    public apiLogsGroupSchemaNameHashGet(schemaName: string, hash: string, _options?: Configuration): Promise<Model200Response3> {
        const result = this.api.apiLogsGroupSchemaNameHashGet(schemaName, hash, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiLogsIdGetWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Model200Response4>> {
        const result = this.api.apiLogsIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiLogsIdGet(id: number, _options?: Configuration): Promise<Model200Response4> {
        const result = this.api.apiLogsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param record 
     */
    public apiLogsPostWithHttpInfo(record?: Record, _options?: Configuration): Promise<HttpInfo<Model200Response4>> {
        const result = this.api.apiLogsPostWithHttpInfo(record, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param record 
     */
    public apiLogsPost(record?: Record, _options?: Configuration): Promise<Model200Response4> {
        const result = this.api.apiLogsPost(record, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param page 
     * @param limit 
     * @param _from Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @param to Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @param record 
     */
    public apiLogsSearchPostWithHttpInfo(page?: number, limit?: number, _from?: string, to?: string, record?: Record, _options?: Configuration): Promise<HttpInfo<Model200Response3>> {
        const result = this.api.apiLogsSearchPostWithHttpInfo(page, limit, _from, to, record, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param page 
     * @param limit 
     * @param _from Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @param to Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @param record 
     */
    public apiLogsSearchPost(page?: number, limit?: number, _from?: string, to?: string, record?: Record, _options?: Configuration): Promise<Model200Response3> {
        const result = this.api.apiLogsSearchPost(page, limit, _from, to, record, _options);
        return result.toPromise();
    }

    /**
     * 
     * 
     */
    public apiSchemasGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Model200Response>> {
        const result = this.api.apiSchemasGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * 
     * 
     */
    public apiSchemasGet(_options?: Configuration): Promise<Model200Response> {
        const result = this.api.apiSchemasGet(_options);
        return result.toPromise();
    }

    /**
     * 
     * 
     * @param id 
     */
    public apiSchemasIdDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Model200Response2>> {
        const result = this.api.apiSchemasIdDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * 
     * @param id 
     */
    public apiSchemasIdDelete(id: number, _options?: Configuration): Promise<Model200Response2> {
        const result = this.api.apiSchemasIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiSchemasIdGetWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Model200Response1>> {
        const result = this.api.apiSchemasIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiSchemasIdGet(id: number, _options?: Configuration): Promise<Model200Response1> {
        const result = this.api.apiSchemasIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * 
     * @param id 
     * @param schema 
     */
    public apiSchemasIdPutWithHttpInfo(id: number, schema?: Schema, _options?: Configuration): Promise<HttpInfo<Model200Response1>> {
        const result = this.api.apiSchemasIdPutWithHttpInfo(id, schema, _options);
        return result.toPromise();
    }

    /**
     * 
     * 
     * @param id 
     * @param schema 
     */
    public apiSchemasIdPut(id: number, schema?: Schema, _options?: Configuration): Promise<Model200Response1> {
        const result = this.api.apiSchemasIdPut(id, schema, _options);
        return result.toPromise();
    }

    /**
     * 
     * 
     * @param schema 
     */
    public apiSchemasPostWithHttpInfo(schema?: Schema, _options?: Configuration): Promise<HttpInfo<Model200Response1>> {
        const result = this.api.apiSchemasPostWithHttpInfo(schema, _options);
        return result.toPromise();
    }

    /**
     * 
     * 
     * @param schema 
     */
    public apiSchemasPost(schema?: Schema, _options?: Configuration): Promise<Model200Response1> {
        const result = this.api.apiSchemasPost(schema, _options);
        return result.toPromise();
    }

    /**
     * 
     */
    public apiSessionGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Model200Response8>> {
        const result = this.api.apiSessionGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * 
     */
    public apiSessionGet(_options?: Configuration): Promise<Model200Response8> {
        const result = this.api.apiSessionGet(_options);
        return result.toPromise();
    }

    /**
     * 
     * @param credentials 
     */
    public apiSessionPostWithHttpInfo(credentials?: Credentials, _options?: Configuration): Promise<HttpInfo<Model200Response8>> {
        const result = this.api.apiSessionPostWithHttpInfo(credentials, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param credentials 
     */
    public apiSessionPost(credentials?: Credentials, _options?: Configuration): Promise<Model200Response8> {
        const result = this.api.apiSessionPost(credentials, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param user 
     */
    public apiSetupRegisterAdminPostWithHttpInfo(user?: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiSetupRegisterAdminPostWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param user 
     */
    public apiSetupRegisterAdminPost(user?: User, _options?: Configuration): Promise<User> {
        const result = this.api.apiSetupRegisterAdminPost(user, _options);
        return result.toPromise();
    }

    /**
     * 
     */
    public apiTagsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Model200Response12>> {
        const result = this.api.apiTagsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * 
     */
    public apiTagsGet(_options?: Configuration): Promise<Model200Response12> {
        const result = this.api.apiTagsGet(_options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiTagsIdDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Model200Response11>> {
        const result = this.api.apiTagsIdDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiTagsIdDelete(id: number, _options?: Configuration): Promise<Model200Response11> {
        const result = this.api.apiTagsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiTagsIdGetWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Model200Response13>> {
        const result = this.api.apiTagsIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiTagsIdGet(id: number, _options?: Configuration): Promise<Model200Response13> {
        const result = this.api.apiTagsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     * @param tag 
     */
    public apiTagsIdPutWithHttpInfo(id: number, tag?: Tag, _options?: Configuration): Promise<HttpInfo<Model200Response13>> {
        const result = this.api.apiTagsIdPutWithHttpInfo(id, tag, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     * @param tag 
     */
    public apiTagsIdPut(id: number, tag?: Tag, _options?: Configuration): Promise<Model200Response13> {
        const result = this.api.apiTagsIdPut(id, tag, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param tag 
     */
    public apiTagsPostWithHttpInfo(tag?: Tag, _options?: Configuration): Promise<HttpInfo<Model200Response13>> {
        const result = this.api.apiTagsPostWithHttpInfo(tag, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param tag 
     */
    public apiTagsPost(tag?: Tag, _options?: Configuration): Promise<Model200Response13> {
        const result = this.api.apiTagsPost(tag, _options);
        return result.toPromise();
    }

    /**
     * 
     */
    public apiUsersGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Model200Response5>> {
        const result = this.api.apiUsersGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * 
     */
    public apiUsersGet(_options?: Configuration): Promise<Model200Response5> {
        const result = this.api.apiUsersGet(_options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiUsersIdDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Model200Response7>> {
        const result = this.api.apiUsersIdDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiUsersIdDelete(id: number, _options?: Configuration): Promise<Model200Response7> {
        const result = this.api.apiUsersIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiUsersIdGetWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Model200Response6>> {
        const result = this.api.apiUsersIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     */
    public apiUsersIdGet(id: number, _options?: Configuration): Promise<Model200Response6> {
        const result = this.api.apiUsersIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     * @param user 
     */
    public apiUsersIdPutWithHttpInfo(id: number, user?: User, _options?: Configuration): Promise<HttpInfo<Model200Response6>> {
        const result = this.api.apiUsersIdPutWithHttpInfo(id, user, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param id 
     * @param user 
     */
    public apiUsersIdPut(id: number, user?: User, _options?: Configuration): Promise<Model200Response6> {
        const result = this.api.apiUsersIdPut(id, user, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param user 
     */
    public apiUsersPostWithHttpInfo(user?: User, _options?: Configuration): Promise<HttpInfo<Model200Response6>> {
        const result = this.api.apiUsersPostWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param user 
     */
    public apiUsersPost(user?: User, _options?: Configuration): Promise<Model200Response6> {
        const result = this.api.apiUsersPost(user, _options);
        return result.toPromise();
    }


}



