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
     */
    public apiApiTokensGet(_options?: Configuration): Promise<InlineResponse2009> {
        const result = this.api.apiApiTokensGet(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiApiTokensIdDelete(id: number, _options?: Configuration): Promise<InlineResponse20011> {
        const result = this.api.apiApiTokensIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiApiTokensIdGet(id: number, _options?: Configuration): Promise<InlineResponse20010> {
        const result = this.api.apiApiTokensIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param apiToken 
     */
    public apiApiTokensIdPut(id: number, apiToken?: ApiToken, _options?: Configuration): Promise<InlineResponse20010> {
        const result = this.api.apiApiTokensIdPut(id, apiToken, _options);
        return result.toPromise();
    }

    /**
     * @param apiToken 
     */
    public apiApiTokensPost(apiToken?: ApiToken, _options?: Configuration): Promise<InlineResponse20010> {
        const result = this.api.apiApiTokensPost(apiToken, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     */
    public apiLogsGet(page?: number, limit?: number, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.apiLogsGet(page, limit, _options);
        return result.toPromise();
    }

    /**
     * @param schemaName 
     * @param hash 
     */
    public apiLogsGroupSchemaNameHashGet(schemaName: string, hash: string, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.apiLogsGroupSchemaNameHashGet(schemaName, hash, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiLogsIdGet(id: number, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.apiLogsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * @param record 
     */
    public apiLogsPost(record?: Record, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.apiLogsPost(record, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param _from Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @param to Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @param record 
     */
    public apiLogsSearchPost(page?: number, limit?: number, _from?: string, to?: string, record?: Record, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.apiLogsSearchPost(page, limit, _from, to, record, _options);
        return result.toPromise();
    }

    /**
     */
    public apiSchemasGet(_options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.apiSchemasGet(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiSchemasIdDelete(id: number, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.apiSchemasIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiSchemasIdGet(id: number, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.apiSchemasIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param schema 
     */
    public apiSchemasIdPut(id: number, schema?: Schema, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.apiSchemasIdPut(id, schema, _options);
        return result.toPromise();
    }

    /**
     * @param schema 
     */
    public apiSchemasPost(schema?: Schema, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.apiSchemasPost(schema, _options);
        return result.toPromise();
    }

    /**
     */
    public apiSessionGet(_options?: Configuration): Promise<InlineResponse2008> {
        const result = this.api.apiSessionGet(_options);
        return result.toPromise();
    }

    /**
     * @param credentials 
     */
    public apiSessionPost(credentials?: Credentials, _options?: Configuration): Promise<InlineResponse2008> {
        const result = this.api.apiSessionPost(credentials, _options);
        return result.toPromise();
    }

    /**
     * @param user 
     */
    public apiSetupRegisterAdminPost(user?: User, _options?: Configuration): Promise<User> {
        const result = this.api.apiSetupRegisterAdminPost(user, _options);
        return result.toPromise();
    }

    /**
     */
    public apiTagsGet(_options?: Configuration): Promise<InlineResponse20012> {
        const result = this.api.apiTagsGet(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiTagsIdDelete(id: number, _options?: Configuration): Promise<InlineResponse20011> {
        const result = this.api.apiTagsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiTagsIdGet(id: number, _options?: Configuration): Promise<InlineResponse20013> {
        const result = this.api.apiTagsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param tag 
     */
    public apiTagsIdPut(id: number, tag?: Tag, _options?: Configuration): Promise<InlineResponse20013> {
        const result = this.api.apiTagsIdPut(id, tag, _options);
        return result.toPromise();
    }

    /**
     * @param tag 
     */
    public apiTagsPost(tag?: Tag, _options?: Configuration): Promise<InlineResponse20013> {
        const result = this.api.apiTagsPost(tag, _options);
        return result.toPromise();
    }

    /**
     */
    public apiUsersGet(_options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.apiUsersGet(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiUsersIdDelete(id: number, _options?: Configuration): Promise<InlineResponse2007> {
        const result = this.api.apiUsersIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiUsersIdGet(id: number, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.apiUsersIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param user 
     */
    public apiUsersIdPut(id: number, user?: User, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.apiUsersIdPut(id, user, _options);
        return result.toPromise();
    }

    /**
     * @param user 
     */
    public apiUsersPost(user?: User, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.apiUsersPost(user, _options);
        return result.toPromise();
    }


}



