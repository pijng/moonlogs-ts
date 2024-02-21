import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ApiToken } from '../models/ApiToken';
import { Credentials } from '../models/Credentials';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse20010 } from '../models/InlineResponse20010';
import { InlineResponse20011 } from '../models/InlineResponse20011';
import { InlineResponse20012 } from '../models/InlineResponse20012';
import { InlineResponse20013 } from '../models/InlineResponse20013';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { InlineResponse2009 } from '../models/InlineResponse2009';
import { Level } from '../models/Level';
import { Meta } from '../models/Meta';
import { Record } from '../models/Record';
import { Role } from '../models/Role';
import { Schema } from '../models/Schema';
import { SchemaField } from '../models/SchemaField';
import { SchemaKind } from '../models/SchemaKind';
import { Session } from '../models/Session';
import { Tag } from '../models/Tag';
import { User } from '../models/User';

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
     * @param param the request object
     */
    public apiApiTokensGet(param: DefaultApiApiApiTokensGetRequest = {}, options?: Configuration): Promise<InlineResponse2009> {
        return this.api.apiApiTokensGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiApiTokensIdDelete(param: DefaultApiApiApiTokensIdDeleteRequest, options?: Configuration): Promise<InlineResponse20011> {
        return this.api.apiApiTokensIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiApiTokensIdGet(param: DefaultApiApiApiTokensIdGetRequest, options?: Configuration): Promise<InlineResponse20010> {
        return this.api.apiApiTokensIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiApiTokensIdPut(param: DefaultApiApiApiTokensIdPutRequest, options?: Configuration): Promise<InlineResponse20010> {
        return this.api.apiApiTokensIdPut(param.id, param.apiToken,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiApiTokensPost(param: DefaultApiApiApiTokensPostRequest = {}, options?: Configuration): Promise<InlineResponse20010> {
        return this.api.apiApiTokensPost(param.apiToken,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLogsGet(param: DefaultApiApiLogsGetRequest = {}, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.apiLogsGet(param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLogsGroupSchemaNameHashGet(param: DefaultApiApiLogsGroupSchemaNameHashGetRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.apiLogsGroupSchemaNameHashGet(param.schemaName, param.hash,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLogsIdGet(param: DefaultApiApiLogsIdGetRequest, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.apiLogsIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLogsPost(param: DefaultApiApiLogsPostRequest = {}, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.apiLogsPost(param.record,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiLogsSearchPost(param: DefaultApiApiLogsSearchPostRequest = {}, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.apiLogsSearchPost(param.page, param.limit, param._from, param.to, param.record,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiSchemasGet(param: DefaultApiApiSchemasGetRequest = {}, options?: Configuration): Promise<InlineResponse200> {
        return this.api.apiSchemasGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiSchemasIdDelete(param: DefaultApiApiSchemasIdDeleteRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.apiSchemasIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiSchemasIdGet(param: DefaultApiApiSchemasIdGetRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.apiSchemasIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiSchemasIdPut(param: DefaultApiApiSchemasIdPutRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.apiSchemasIdPut(param.id, param.schema,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiSchemasPost(param: DefaultApiApiSchemasPostRequest = {}, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.apiSchemasPost(param.schema,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiSessionGet(param: DefaultApiApiSessionGetRequest = {}, options?: Configuration): Promise<InlineResponse2008> {
        return this.api.apiSessionGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiSessionPost(param: DefaultApiApiSessionPostRequest = {}, options?: Configuration): Promise<InlineResponse2008> {
        return this.api.apiSessionPost(param.credentials,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiSetupRegisterAdminPost(param: DefaultApiApiSetupRegisterAdminPostRequest = {}, options?: Configuration): Promise<User> {
        return this.api.apiSetupRegisterAdminPost(param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTagsGet(param: DefaultApiApiTagsGetRequest = {}, options?: Configuration): Promise<InlineResponse20012> {
        return this.api.apiTagsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTagsIdDelete(param: DefaultApiApiTagsIdDeleteRequest, options?: Configuration): Promise<InlineResponse20011> {
        return this.api.apiTagsIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTagsIdGet(param: DefaultApiApiTagsIdGetRequest, options?: Configuration): Promise<InlineResponse20013> {
        return this.api.apiTagsIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTagsIdPut(param: DefaultApiApiTagsIdPutRequest, options?: Configuration): Promise<InlineResponse20013> {
        return this.api.apiTagsIdPut(param.id, param.tag,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTagsPost(param: DefaultApiApiTagsPostRequest = {}, options?: Configuration): Promise<InlineResponse20013> {
        return this.api.apiTagsPost(param.tag,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersGet(param: DefaultApiApiUsersGetRequest = {}, options?: Configuration): Promise<InlineResponse2005> {
        return this.api.apiUsersGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdDelete(param: DefaultApiApiUsersIdDeleteRequest, options?: Configuration): Promise<InlineResponse2007> {
        return this.api.apiUsersIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdGet(param: DefaultApiApiUsersIdGetRequest, options?: Configuration): Promise<InlineResponse2006> {
        return this.api.apiUsersIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdPut(param: DefaultApiApiUsersIdPutRequest, options?: Configuration): Promise<InlineResponse2006> {
        return this.api.apiUsersIdPut(param.id, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersPost(param: DefaultApiApiUsersPostRequest = {}, options?: Configuration): Promise<InlineResponse2006> {
        return this.api.apiUsersPost(param.user,  options).toPromise();
    }

}
