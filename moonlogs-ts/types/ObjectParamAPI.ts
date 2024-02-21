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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiApiApiTokensGetRequest {
}

export interface DefaultApiApiApiTokensIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiApiTokensIdDelete
     */
    id: number
}

export interface DefaultApiApiApiTokensIdGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiApiTokensIdGet
     */
    id: number
}

export interface DefaultApiApiApiTokensIdPutRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiApiTokensIdPut
     */
    id: number
    /**
     * 
     * @type ApiToken
     * @memberof DefaultApiapiApiTokensIdPut
     */
    apiToken?: ApiToken
}

export interface DefaultApiApiApiTokensPostRequest {
    /**
     * 
     * @type ApiToken
     * @memberof DefaultApiapiApiTokensPost
     */
    apiToken?: ApiToken
}

export interface DefaultApiApiLogsGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiLogsGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof DefaultApiapiLogsGet
     */
    limit?: number
}

export interface DefaultApiApiLogsGroupSchemaNameHashGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiapiLogsGroupSchemaNameHashGet
     */
    schemaName: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiLogsGroupSchemaNameHashGet
     */
    hash: string
}

export interface DefaultApiApiLogsIdGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiLogsIdGet
     */
    id: number
}

export interface DefaultApiApiLogsPostRequest {
    /**
     * 
     * @type Record
     * @memberof DefaultApiapiLogsPost
     */
    record?: Record
}

export interface DefaultApiApiLogsSearchPostRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiLogsSearchPost
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof DefaultApiapiLogsSearchPost
     */
    limit?: number
    /**
     * Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @type string
     * @memberof DefaultApiapiLogsSearchPost
     */
    _from?: string
    /**
     * Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @type string
     * @memberof DefaultApiapiLogsSearchPost
     */
    to?: string
    /**
     * 
     * @type Record
     * @memberof DefaultApiapiLogsSearchPost
     */
    record?: Record
}

export interface DefaultApiApiSchemasGetRequest {
}

export interface DefaultApiApiSchemasIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiSchemasIdDelete
     */
    id: number
}

export interface DefaultApiApiSchemasIdGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiSchemasIdGet
     */
    id: number
}

export interface DefaultApiApiSchemasIdPutRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiSchemasIdPut
     */
    id: number
    /**
     * 
     * @type Schema
     * @memberof DefaultApiapiSchemasIdPut
     */
    schema?: Schema
}

export interface DefaultApiApiSchemasPostRequest {
    /**
     * 
     * @type Schema
     * @memberof DefaultApiapiSchemasPost
     */
    schema?: Schema
}

export interface DefaultApiApiSessionGetRequest {
}

export interface DefaultApiApiSessionPostRequest {
    /**
     * 
     * @type Credentials
     * @memberof DefaultApiapiSessionPost
     */
    credentials?: Credentials
}

export interface DefaultApiApiSetupRegisterAdminPostRequest {
    /**
     * 
     * @type User
     * @memberof DefaultApiapiSetupRegisterAdminPost
     */
    user?: User
}

export interface DefaultApiApiTagsGetRequest {
}

export interface DefaultApiApiTagsIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiTagsIdDelete
     */
    id: number
}

export interface DefaultApiApiTagsIdGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiTagsIdGet
     */
    id: number
}

export interface DefaultApiApiTagsIdPutRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiTagsIdPut
     */
    id: number
    /**
     * 
     * @type Tag
     * @memberof DefaultApiapiTagsIdPut
     */
    tag?: Tag
}

export interface DefaultApiApiTagsPostRequest {
    /**
     * 
     * @type Tag
     * @memberof DefaultApiapiTagsPost
     */
    tag?: Tag
}

export interface DefaultApiApiUsersGetRequest {
}

export interface DefaultApiApiUsersIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiUsersIdDelete
     */
    id: number
}

export interface DefaultApiApiUsersIdGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiUsersIdGet
     */
    id: number
}

export interface DefaultApiApiUsersIdPutRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiapiUsersIdPut
     */
    id: number
    /**
     * 
     * @type User
     * @memberof DefaultApiapiUsersIdPut
     */
    user?: User
}

export interface DefaultApiApiUsersPostRequest {
    /**
     * 
     * @type User
     * @memberof DefaultApiapiUsersPost
     */
    user?: User
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * @param param the request object
     */
    public apiApiTokensGetWithHttpInfo(param: DefaultApiApiApiTokensGetRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response9>> {
        return this.api.apiApiTokensGetWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiApiTokensGet(param: DefaultApiApiApiTokensGetRequest = {}, options?: Configuration): Promise<Model200Response9> {
        return this.api.apiApiTokensGet( options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiApiTokensIdDeleteWithHttpInfo(param: DefaultApiApiApiTokensIdDeleteRequest, options?: Configuration): Promise<HttpInfo<Model200Response11>> {
        return this.api.apiApiTokensIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiApiTokensIdDelete(param: DefaultApiApiApiTokensIdDeleteRequest, options?: Configuration): Promise<Model200Response11> {
        return this.api.apiApiTokensIdDelete(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiApiTokensIdGetWithHttpInfo(param: DefaultApiApiApiTokensIdGetRequest, options?: Configuration): Promise<HttpInfo<Model200Response10>> {
        return this.api.apiApiTokensIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiApiTokensIdGet(param: DefaultApiApiApiTokensIdGetRequest, options?: Configuration): Promise<Model200Response10> {
        return this.api.apiApiTokensIdGet(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiApiTokensIdPutWithHttpInfo(param: DefaultApiApiApiTokensIdPutRequest, options?: Configuration): Promise<HttpInfo<Model200Response10>> {
        return this.api.apiApiTokensIdPutWithHttpInfo(param.id, param.apiToken,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiApiTokensIdPut(param: DefaultApiApiApiTokensIdPutRequest, options?: Configuration): Promise<Model200Response10> {
        return this.api.apiApiTokensIdPut(param.id, param.apiToken,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiApiTokensPostWithHttpInfo(param: DefaultApiApiApiTokensPostRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response10>> {
        return this.api.apiApiTokensPostWithHttpInfo(param.apiToken,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiApiTokensPost(param: DefaultApiApiApiTokensPostRequest = {}, options?: Configuration): Promise<Model200Response10> {
        return this.api.apiApiTokensPost(param.apiToken,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiLogsGetWithHttpInfo(param: DefaultApiApiLogsGetRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response3>> {
        return this.api.apiLogsGetWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiLogsGet(param: DefaultApiApiLogsGetRequest = {}, options?: Configuration): Promise<Model200Response3> {
        return this.api.apiLogsGet(param.page, param.limit,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiLogsGroupSchemaNameHashGetWithHttpInfo(param: DefaultApiApiLogsGroupSchemaNameHashGetRequest, options?: Configuration): Promise<HttpInfo<Model200Response3>> {
        return this.api.apiLogsGroupSchemaNameHashGetWithHttpInfo(param.schemaName, param.hash,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiLogsGroupSchemaNameHashGet(param: DefaultApiApiLogsGroupSchemaNameHashGetRequest, options?: Configuration): Promise<Model200Response3> {
        return this.api.apiLogsGroupSchemaNameHashGet(param.schemaName, param.hash,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiLogsIdGetWithHttpInfo(param: DefaultApiApiLogsIdGetRequest, options?: Configuration): Promise<HttpInfo<Model200Response4>> {
        return this.api.apiLogsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiLogsIdGet(param: DefaultApiApiLogsIdGetRequest, options?: Configuration): Promise<Model200Response4> {
        return this.api.apiLogsIdGet(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiLogsPostWithHttpInfo(param: DefaultApiApiLogsPostRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response4>> {
        return this.api.apiLogsPostWithHttpInfo(param.record,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiLogsPost(param: DefaultApiApiLogsPostRequest = {}, options?: Configuration): Promise<Model200Response4> {
        return this.api.apiLogsPost(param.record,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiLogsSearchPostWithHttpInfo(param: DefaultApiApiLogsSearchPostRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response3>> {
        return this.api.apiLogsSearchPostWithHttpInfo(param.page, param.limit, param._from, param.to, param.record,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiLogsSearchPost(param: DefaultApiApiLogsSearchPostRequest = {}, options?: Configuration): Promise<Model200Response3> {
        return this.api.apiLogsSearchPost(param.page, param.limit, param._from, param.to, param.record,  options).toPromise();
    }

    /**
     * 
     * 
     * @param param the request object
     */
    public apiSchemasGetWithHttpInfo(param: DefaultApiApiSchemasGetRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response>> {
        return this.api.apiSchemasGetWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * 
     * @param param the request object
     */
    public apiSchemasGet(param: DefaultApiApiSchemasGetRequest = {}, options?: Configuration): Promise<Model200Response> {
        return this.api.apiSchemasGet( options).toPromise();
    }

    /**
     * 
     * 
     * @param param the request object
     */
    public apiSchemasIdDeleteWithHttpInfo(param: DefaultApiApiSchemasIdDeleteRequest, options?: Configuration): Promise<HttpInfo<Model200Response2>> {
        return this.api.apiSchemasIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * 
     * 
     * @param param the request object
     */
    public apiSchemasIdDelete(param: DefaultApiApiSchemasIdDeleteRequest, options?: Configuration): Promise<Model200Response2> {
        return this.api.apiSchemasIdDelete(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiSchemasIdGetWithHttpInfo(param: DefaultApiApiSchemasIdGetRequest, options?: Configuration): Promise<HttpInfo<Model200Response1>> {
        return this.api.apiSchemasIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiSchemasIdGet(param: DefaultApiApiSchemasIdGetRequest, options?: Configuration): Promise<Model200Response1> {
        return this.api.apiSchemasIdGet(param.id,  options).toPromise();
    }

    /**
     * 
     * 
     * @param param the request object
     */
    public apiSchemasIdPutWithHttpInfo(param: DefaultApiApiSchemasIdPutRequest, options?: Configuration): Promise<HttpInfo<Model200Response1>> {
        return this.api.apiSchemasIdPutWithHttpInfo(param.id, param.schema,  options).toPromise();
    }

    /**
     * 
     * 
     * @param param the request object
     */
    public apiSchemasIdPut(param: DefaultApiApiSchemasIdPutRequest, options?: Configuration): Promise<Model200Response1> {
        return this.api.apiSchemasIdPut(param.id, param.schema,  options).toPromise();
    }

    /**
     * 
     * 
     * @param param the request object
     */
    public apiSchemasPostWithHttpInfo(param: DefaultApiApiSchemasPostRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response1>> {
        return this.api.apiSchemasPostWithHttpInfo(param.schema,  options).toPromise();
    }

    /**
     * 
     * 
     * @param param the request object
     */
    public apiSchemasPost(param: DefaultApiApiSchemasPostRequest = {}, options?: Configuration): Promise<Model200Response1> {
        return this.api.apiSchemasPost(param.schema,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiSessionGetWithHttpInfo(param: DefaultApiApiSessionGetRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response8>> {
        return this.api.apiSessionGetWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiSessionGet(param: DefaultApiApiSessionGetRequest = {}, options?: Configuration): Promise<Model200Response8> {
        return this.api.apiSessionGet( options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiSessionPostWithHttpInfo(param: DefaultApiApiSessionPostRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response8>> {
        return this.api.apiSessionPostWithHttpInfo(param.credentials,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiSessionPost(param: DefaultApiApiSessionPostRequest = {}, options?: Configuration): Promise<Model200Response8> {
        return this.api.apiSessionPost(param.credentials,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiSetupRegisterAdminPostWithHttpInfo(param: DefaultApiApiSetupRegisterAdminPostRequest = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiSetupRegisterAdminPostWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiSetupRegisterAdminPost(param: DefaultApiApiSetupRegisterAdminPostRequest = {}, options?: Configuration): Promise<User> {
        return this.api.apiSetupRegisterAdminPost(param.user,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiTagsGetWithHttpInfo(param: DefaultApiApiTagsGetRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response12>> {
        return this.api.apiTagsGetWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiTagsGet(param: DefaultApiApiTagsGetRequest = {}, options?: Configuration): Promise<Model200Response12> {
        return this.api.apiTagsGet( options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiTagsIdDeleteWithHttpInfo(param: DefaultApiApiTagsIdDeleteRequest, options?: Configuration): Promise<HttpInfo<Model200Response11>> {
        return this.api.apiTagsIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiTagsIdDelete(param: DefaultApiApiTagsIdDeleteRequest, options?: Configuration): Promise<Model200Response11> {
        return this.api.apiTagsIdDelete(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiTagsIdGetWithHttpInfo(param: DefaultApiApiTagsIdGetRequest, options?: Configuration): Promise<HttpInfo<Model200Response13>> {
        return this.api.apiTagsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiTagsIdGet(param: DefaultApiApiTagsIdGetRequest, options?: Configuration): Promise<Model200Response13> {
        return this.api.apiTagsIdGet(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiTagsIdPutWithHttpInfo(param: DefaultApiApiTagsIdPutRequest, options?: Configuration): Promise<HttpInfo<Model200Response13>> {
        return this.api.apiTagsIdPutWithHttpInfo(param.id, param.tag,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiTagsIdPut(param: DefaultApiApiTagsIdPutRequest, options?: Configuration): Promise<Model200Response13> {
        return this.api.apiTagsIdPut(param.id, param.tag,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiTagsPostWithHttpInfo(param: DefaultApiApiTagsPostRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response13>> {
        return this.api.apiTagsPostWithHttpInfo(param.tag,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiTagsPost(param: DefaultApiApiTagsPostRequest = {}, options?: Configuration): Promise<Model200Response13> {
        return this.api.apiTagsPost(param.tag,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiUsersGetWithHttpInfo(param: DefaultApiApiUsersGetRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response5>> {
        return this.api.apiUsersGetWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiUsersGet(param: DefaultApiApiUsersGetRequest = {}, options?: Configuration): Promise<Model200Response5> {
        return this.api.apiUsersGet( options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiUsersIdDeleteWithHttpInfo(param: DefaultApiApiUsersIdDeleteRequest, options?: Configuration): Promise<HttpInfo<Model200Response7>> {
        return this.api.apiUsersIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiUsersIdDelete(param: DefaultApiApiUsersIdDeleteRequest, options?: Configuration): Promise<Model200Response7> {
        return this.api.apiUsersIdDelete(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiUsersIdGetWithHttpInfo(param: DefaultApiApiUsersIdGetRequest, options?: Configuration): Promise<HttpInfo<Model200Response6>> {
        return this.api.apiUsersIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiUsersIdGet(param: DefaultApiApiUsersIdGetRequest, options?: Configuration): Promise<Model200Response6> {
        return this.api.apiUsersIdGet(param.id,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiUsersIdPutWithHttpInfo(param: DefaultApiApiUsersIdPutRequest, options?: Configuration): Promise<HttpInfo<Model200Response6>> {
        return this.api.apiUsersIdPutWithHttpInfo(param.id, param.user,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiUsersIdPut(param: DefaultApiApiUsersIdPutRequest, options?: Configuration): Promise<Model200Response6> {
        return this.api.apiUsersIdPut(param.id, param.user,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiUsersPostWithHttpInfo(param: DefaultApiApiUsersPostRequest = {}, options?: Configuration): Promise<HttpInfo<Model200Response6>> {
        return this.api.apiUsersPostWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public apiUsersPost(param: DefaultApiApiUsersPostRequest = {}, options?: Configuration): Promise<Model200Response6> {
        return this.api.apiUsersPost(param.user,  options).toPromise();
    }

}
