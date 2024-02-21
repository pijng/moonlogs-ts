import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * 
     */
    public apiApiTokensGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Model200Response9>> {
        const requestContextPromise = this.requestFactory.apiApiTokensGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiApiTokensGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     */
    public apiApiTokensGet(_options?: Configuration): Observable<Model200Response9> {
        return this.apiApiTokensGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Model200Response9>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     */
    public apiApiTokensIdDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Model200Response11>> {
        const requestContextPromise = this.requestFactory.apiApiTokensIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiApiTokensIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     */
    public apiApiTokensIdDelete(id: number, _options?: Configuration): Observable<Model200Response11> {
        return this.apiApiTokensIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Model200Response11>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     */
    public apiApiTokensIdGetWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Model200Response10>> {
        const requestContextPromise = this.requestFactory.apiApiTokensIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiApiTokensIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     */
    public apiApiTokensIdGet(id: number, _options?: Configuration): Observable<Model200Response10> {
        return this.apiApiTokensIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Model200Response10>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     * @param apiToken 
     */
    public apiApiTokensIdPutWithHttpInfo(id: number, apiToken?: ApiToken, _options?: Configuration): Observable<HttpInfo<Model200Response10>> {
        const requestContextPromise = this.requestFactory.apiApiTokensIdPut(id, apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiApiTokensIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     * @param apiToken 
     */
    public apiApiTokensIdPut(id: number, apiToken?: ApiToken, _options?: Configuration): Observable<Model200Response10> {
        return this.apiApiTokensIdPutWithHttpInfo(id, apiToken, _options).pipe(map((apiResponse: HttpInfo<Model200Response10>) => apiResponse.data));
    }

    /**
     * 
     * @param apiToken 
     */
    public apiApiTokensPostWithHttpInfo(apiToken?: ApiToken, _options?: Configuration): Observable<HttpInfo<Model200Response10>> {
        const requestContextPromise = this.requestFactory.apiApiTokensPost(apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiApiTokensPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param apiToken 
     */
    public apiApiTokensPost(apiToken?: ApiToken, _options?: Configuration): Observable<Model200Response10> {
        return this.apiApiTokensPostWithHttpInfo(apiToken, _options).pipe(map((apiResponse: HttpInfo<Model200Response10>) => apiResponse.data));
    }

    /**
     * 
     * @param page 
     * @param limit 
     */
    public apiLogsGetWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<Model200Response3>> {
        const requestContextPromise = this.requestFactory.apiLogsGet(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiLogsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param page 
     * @param limit 
     */
    public apiLogsGet(page?: number, limit?: number, _options?: Configuration): Observable<Model200Response3> {
        return this.apiLogsGetWithHttpInfo(page, limit, _options).pipe(map((apiResponse: HttpInfo<Model200Response3>) => apiResponse.data));
    }

    /**
     * 
     * @param schemaName 
     * @param hash 
     */
    public apiLogsGroupSchemaNameHashGetWithHttpInfo(schemaName: string, hash: string, _options?: Configuration): Observable<HttpInfo<Model200Response3>> {
        const requestContextPromise = this.requestFactory.apiLogsGroupSchemaNameHashGet(schemaName, hash, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiLogsGroupSchemaNameHashGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param schemaName 
     * @param hash 
     */
    public apiLogsGroupSchemaNameHashGet(schemaName: string, hash: string, _options?: Configuration): Observable<Model200Response3> {
        return this.apiLogsGroupSchemaNameHashGetWithHttpInfo(schemaName, hash, _options).pipe(map((apiResponse: HttpInfo<Model200Response3>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     */
    public apiLogsIdGetWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Model200Response4>> {
        const requestContextPromise = this.requestFactory.apiLogsIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiLogsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     */
    public apiLogsIdGet(id: number, _options?: Configuration): Observable<Model200Response4> {
        return this.apiLogsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Model200Response4>) => apiResponse.data));
    }

    /**
     * 
     * @param record 
     */
    public apiLogsPostWithHttpInfo(record?: Record, _options?: Configuration): Observable<HttpInfo<Model200Response4>> {
        const requestContextPromise = this.requestFactory.apiLogsPost(record, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiLogsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param record 
     */
    public apiLogsPost(record?: Record, _options?: Configuration): Observable<Model200Response4> {
        return this.apiLogsPostWithHttpInfo(record, _options).pipe(map((apiResponse: HttpInfo<Model200Response4>) => apiResponse.data));
    }

    /**
     * 
     * @param page 
     * @param limit 
     * @param _from Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @param to Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @param record 
     */
    public apiLogsSearchPostWithHttpInfo(page?: number, limit?: number, _from?: string, to?: string, record?: Record, _options?: Configuration): Observable<HttpInfo<Model200Response3>> {
        const requestContextPromise = this.requestFactory.apiLogsSearchPost(page, limit, _from, to, record, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiLogsSearchPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param page 
     * @param limit 
     * @param _from Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @param to Time in format \&quot;YYYY-DD-MMTHH:SS\&quot;
     * @param record 
     */
    public apiLogsSearchPost(page?: number, limit?: number, _from?: string, to?: string, record?: Record, _options?: Configuration): Observable<Model200Response3> {
        return this.apiLogsSearchPostWithHttpInfo(page, limit, _from, to, record, _options).pipe(map((apiResponse: HttpInfo<Model200Response3>) => apiResponse.data));
    }

    /**
     * 
     * 
     */
    public apiSchemasGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Model200Response>> {
        const requestContextPromise = this.requestFactory.apiSchemasGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiSchemasGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * 
     */
    public apiSchemasGet(_options?: Configuration): Observable<Model200Response> {
        return this.apiSchemasGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Model200Response>) => apiResponse.data));
    }

    /**
     * 
     * 
     * @param id 
     */
    public apiSchemasIdDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Model200Response2>> {
        const requestContextPromise = this.requestFactory.apiSchemasIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiSchemasIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * 
     * @param id 
     */
    public apiSchemasIdDelete(id: number, _options?: Configuration): Observable<Model200Response2> {
        return this.apiSchemasIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Model200Response2>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     */
    public apiSchemasIdGetWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Model200Response1>> {
        const requestContextPromise = this.requestFactory.apiSchemasIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiSchemasIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     */
    public apiSchemasIdGet(id: number, _options?: Configuration): Observable<Model200Response1> {
        return this.apiSchemasIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Model200Response1>) => apiResponse.data));
    }

    /**
     * 
     * 
     * @param id 
     * @param schema 
     */
    public apiSchemasIdPutWithHttpInfo(id: number, schema?: Schema, _options?: Configuration): Observable<HttpInfo<Model200Response1>> {
        const requestContextPromise = this.requestFactory.apiSchemasIdPut(id, schema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiSchemasIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * 
     * @param id 
     * @param schema 
     */
    public apiSchemasIdPut(id: number, schema?: Schema, _options?: Configuration): Observable<Model200Response1> {
        return this.apiSchemasIdPutWithHttpInfo(id, schema, _options).pipe(map((apiResponse: HttpInfo<Model200Response1>) => apiResponse.data));
    }

    /**
     * 
     * 
     * @param schema 
     */
    public apiSchemasPostWithHttpInfo(schema?: Schema, _options?: Configuration): Observable<HttpInfo<Model200Response1>> {
        const requestContextPromise = this.requestFactory.apiSchemasPost(schema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiSchemasPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * 
     * @param schema 
     */
    public apiSchemasPost(schema?: Schema, _options?: Configuration): Observable<Model200Response1> {
        return this.apiSchemasPostWithHttpInfo(schema, _options).pipe(map((apiResponse: HttpInfo<Model200Response1>) => apiResponse.data));
    }

    /**
     * 
     */
    public apiSessionGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Model200Response8>> {
        const requestContextPromise = this.requestFactory.apiSessionGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiSessionGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     */
    public apiSessionGet(_options?: Configuration): Observable<Model200Response8> {
        return this.apiSessionGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Model200Response8>) => apiResponse.data));
    }

    /**
     * 
     * @param credentials 
     */
    public apiSessionPostWithHttpInfo(credentials?: Credentials, _options?: Configuration): Observable<HttpInfo<Model200Response8>> {
        const requestContextPromise = this.requestFactory.apiSessionPost(credentials, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiSessionPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param credentials 
     */
    public apiSessionPost(credentials?: Credentials, _options?: Configuration): Observable<Model200Response8> {
        return this.apiSessionPostWithHttpInfo(credentials, _options).pipe(map((apiResponse: HttpInfo<Model200Response8>) => apiResponse.data));
    }

    /**
     * 
     * @param user 
     */
    public apiSetupRegisterAdminPostWithHttpInfo(user?: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiSetupRegisterAdminPost(user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiSetupRegisterAdminPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param user 
     */
    public apiSetupRegisterAdminPost(user?: User, _options?: Configuration): Observable<User> {
        return this.apiSetupRegisterAdminPostWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * 
     */
    public apiTagsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Model200Response12>> {
        const requestContextPromise = this.requestFactory.apiTagsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTagsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     */
    public apiTagsGet(_options?: Configuration): Observable<Model200Response12> {
        return this.apiTagsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Model200Response12>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     */
    public apiTagsIdDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Model200Response11>> {
        const requestContextPromise = this.requestFactory.apiTagsIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTagsIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     */
    public apiTagsIdDelete(id: number, _options?: Configuration): Observable<Model200Response11> {
        return this.apiTagsIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Model200Response11>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     */
    public apiTagsIdGetWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Model200Response13>> {
        const requestContextPromise = this.requestFactory.apiTagsIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTagsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     */
    public apiTagsIdGet(id: number, _options?: Configuration): Observable<Model200Response13> {
        return this.apiTagsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Model200Response13>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     * @param tag 
     */
    public apiTagsIdPutWithHttpInfo(id: number, tag?: Tag, _options?: Configuration): Observable<HttpInfo<Model200Response13>> {
        const requestContextPromise = this.requestFactory.apiTagsIdPut(id, tag, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTagsIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     * @param tag 
     */
    public apiTagsIdPut(id: number, tag?: Tag, _options?: Configuration): Observable<Model200Response13> {
        return this.apiTagsIdPutWithHttpInfo(id, tag, _options).pipe(map((apiResponse: HttpInfo<Model200Response13>) => apiResponse.data));
    }

    /**
     * 
     * @param tag 
     */
    public apiTagsPostWithHttpInfo(tag?: Tag, _options?: Configuration): Observable<HttpInfo<Model200Response13>> {
        const requestContextPromise = this.requestFactory.apiTagsPost(tag, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTagsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param tag 
     */
    public apiTagsPost(tag?: Tag, _options?: Configuration): Observable<Model200Response13> {
        return this.apiTagsPostWithHttpInfo(tag, _options).pipe(map((apiResponse: HttpInfo<Model200Response13>) => apiResponse.data));
    }

    /**
     * 
     */
    public apiUsersGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Model200Response5>> {
        const requestContextPromise = this.requestFactory.apiUsersGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     */
    public apiUsersGet(_options?: Configuration): Observable<Model200Response5> {
        return this.apiUsersGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Model200Response5>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     */
    public apiUsersIdDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Model200Response7>> {
        const requestContextPromise = this.requestFactory.apiUsersIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     */
    public apiUsersIdDelete(id: number, _options?: Configuration): Observable<Model200Response7> {
        return this.apiUsersIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Model200Response7>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     */
    public apiUsersIdGetWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Model200Response6>> {
        const requestContextPromise = this.requestFactory.apiUsersIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     */
    public apiUsersIdGet(id: number, _options?: Configuration): Observable<Model200Response6> {
        return this.apiUsersIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Model200Response6>) => apiResponse.data));
    }

    /**
     * 
     * @param id 
     * @param user 
     */
    public apiUsersIdPutWithHttpInfo(id: number, user?: User, _options?: Configuration): Observable<HttpInfo<Model200Response6>> {
        const requestContextPromise = this.requestFactory.apiUsersIdPut(id, user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param id 
     * @param user 
     */
    public apiUsersIdPut(id: number, user?: User, _options?: Configuration): Observable<Model200Response6> {
        return this.apiUsersIdPutWithHttpInfo(id, user, _options).pipe(map((apiResponse: HttpInfo<Model200Response6>) => apiResponse.data));
    }

    /**
     * 
     * @param user 
     */
    public apiUsersPostWithHttpInfo(user?: User, _options?: Configuration): Observable<HttpInfo<Model200Response6>> {
        const requestContextPromise = this.requestFactory.apiUsersPost(user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * @param user 
     */
    public apiUsersPost(user?: User, _options?: Configuration): Observable<Model200Response6> {
        return this.apiUsersPostWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<Model200Response6>) => apiResponse.data));
    }

}
