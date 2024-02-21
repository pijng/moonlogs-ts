# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiApiTokensGet**](DefaultApi.md#apiApiTokensGet) | **GET** /api/api_tokens | 
[**apiApiTokensIdDelete**](DefaultApi.md#apiApiTokensIdDelete) | **DELETE** /api/api_tokens/{id} | 
[**apiApiTokensIdGet**](DefaultApi.md#apiApiTokensIdGet) | **GET** /api/api_tokens/{id} | 
[**apiApiTokensIdPut**](DefaultApi.md#apiApiTokensIdPut) | **PUT** /api/api_tokens/{id} | 
[**apiApiTokensPost**](DefaultApi.md#apiApiTokensPost) | **POST** /api/api_tokens | 
[**apiLogsGet**](DefaultApi.md#apiLogsGet) | **GET** /api/logs | 
[**apiLogsGroupSchemaNameHashGet**](DefaultApi.md#apiLogsGroupSchemaNameHashGet) | **GET** /api/logs/group/{schema_name}/{hash} | 
[**apiLogsIdGet**](DefaultApi.md#apiLogsIdGet) | **GET** /api/logs/{id} | 
[**apiLogsPost**](DefaultApi.md#apiLogsPost) | **POST** /api/logs | 
[**apiLogsSearchPost**](DefaultApi.md#apiLogsSearchPost) | **POST** /api/logs/search | 
[**apiSchemasGet**](DefaultApi.md#apiSchemasGet) | **GET** /api/schemas | 
[**apiSchemasIdDelete**](DefaultApi.md#apiSchemasIdDelete) | **DELETE** /api/schemas/{id} | 
[**apiSchemasIdGet**](DefaultApi.md#apiSchemasIdGet) | **GET** /api/schemas/{id} | 
[**apiSchemasIdPut**](DefaultApi.md#apiSchemasIdPut) | **PUT** /api/schemas/{id} | 
[**apiSchemasPost**](DefaultApi.md#apiSchemasPost) | **POST** /api/schemas | 
[**apiSessionGet**](DefaultApi.md#apiSessionGet) | **GET** /api/session | 
[**apiSessionPost**](DefaultApi.md#apiSessionPost) | **POST** /api/session | 
[**apiSetupRegisterAdminPost**](DefaultApi.md#apiSetupRegisterAdminPost) | **POST** /api/setup/register_admin | 
[**apiTagsGet**](DefaultApi.md#apiTagsGet) | **GET** /api/tags | 
[**apiTagsIdDelete**](DefaultApi.md#apiTagsIdDelete) | **DELETE** /api/tags/{id} | 
[**apiTagsIdGet**](DefaultApi.md#apiTagsIdGet) | **GET** /api/tags/{id} | 
[**apiTagsIdPut**](DefaultApi.md#apiTagsIdPut) | **PUT** /api/tags/{id} | 
[**apiTagsPost**](DefaultApi.md#apiTagsPost) | **POST** /api/tags | 
[**apiUsersGet**](DefaultApi.md#apiUsersGet) | **GET** /api/users | 
[**apiUsersIdDelete**](DefaultApi.md#apiUsersIdDelete) | **DELETE** /api/users/{id} | 
[**apiUsersIdGet**](DefaultApi.md#apiUsersIdGet) | **GET** /api/users/{id} | 
[**apiUsersIdPut**](DefaultApi.md#apiUsersIdPut) | **PUT** /api/users/{id} | 
[**apiUsersPost**](DefaultApi.md#apiUsersPost) | **POST** /api/users | 


# **apiApiTokensGet**
> Model200Response9 apiApiTokensGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.apiApiTokensGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Model200Response9**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiApiTokensIdDelete**
> Model200Response11 apiApiTokensIdDelete()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiApiTokensIdDeleteRequest = {
  // number | 
  id: 1,
};

apiInstance.apiApiTokensIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response11**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiApiTokensIdGet**
> Model200Response10 apiApiTokensIdGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiApiTokensIdGetRequest = {
  // number | 
  id: 1,
};

apiInstance.apiApiTokensIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response10**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiApiTokensIdPut**
> Model200Response10 apiApiTokensIdPut()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiApiTokensIdPutRequest = {
  // number | 
  id: 1,
  // ApiToken (optional)
  apiToken: {
    id: 3.14,
    token: "token_example",
    name: "name_example",
    isRevoked: true,
  },
};

apiInstance.apiApiTokensIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **ApiToken**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response10**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiApiTokensPost**
> Model200Response10 apiApiTokensPost()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiApiTokensPostRequest = {
  // ApiToken (optional)
  apiToken: {
    id: 3.14,
    token: "token_example",
    name: "name_example",
    isRevoked: true,
  },
};

apiInstance.apiApiTokensPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **ApiToken**|  |


### Return type

**Model200Response10**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiLogsGet**
> Model200Response3 apiLogsGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiLogsGetRequest = {
  // number |  (optional)
  page: 1,
  // number |  (optional)
  limit: 1,
};

apiInstance.apiLogsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**Model200Response3**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiLogsGroupSchemaNameHashGet**
> Model200Response3 apiLogsGroupSchemaNameHashGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiLogsGroupSchemaNameHashGetRequest = {
  // string | 
  schemaName: "schema_name_example",
  // string | 
  hash: "hash_example",
};

apiInstance.apiLogsGroupSchemaNameHashGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schemaName** | [**string**] |  | defaults to undefined
 **hash** | [**string**] |  | defaults to undefined


### Return type

**Model200Response3**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiLogsIdGet**
> Model200Response4 apiLogsIdGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiLogsIdGetRequest = {
  // number | 
  id: 1,
};

apiInstance.apiLogsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response4**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiLogsPost**
> Model200Response4 apiLogsPost()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiLogsPostRequest = {
  // Record (optional)
  record: {
    id: 1,
    text: "text_example",
    schemaName: "schemaName_example",
    schemaId: 1,
    query: {},
    kind: "kind_example",
    createdAt: "createdAt_example",
    groupHash: "groupHash_example",
    level: null,
  },
};

apiInstance.apiLogsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **record** | **Record**|  |


### Return type

**Model200Response4**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiLogsSearchPost**
> Model200Response3 apiLogsSearchPost()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiLogsSearchPostRequest = {
  // number |  (optional)
  page: 1,
  // number |  (optional)
  limit: 1,
  // string | Time in format \"YYYY-DD-MMTHH:SS\" (optional)
  _from: "from_example",
  // string | Time in format \"YYYY-DD-MMTHH:SS\" (optional)
  to: "to_example",
  // Record (optional)
  record: {
    id: 1,
    text: "text_example",
    schemaName: "schemaName_example",
    schemaId: 1,
    query: {},
    kind: "kind_example",
    createdAt: "createdAt_example",
    groupHash: "groupHash_example",
    level: null,
  },
};

apiInstance.apiLogsSearchPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **record** | **Record**|  |
 **page** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **_from** | [**string**] | Time in format \&quot;YYYY-DD-MMTHH:SS\&quot; | (optional) defaults to undefined
 **to** | [**string**] | Time in format \&quot;YYYY-DD-MMTHH:SS\&quot; | (optional) defaults to undefined


### Return type

**Model200Response3**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiSchemasGet**
> Model200Response apiSchemasGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.apiSchemasGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Model200Response**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiSchemasIdDelete**
> Model200Response2 apiSchemasIdDelete()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiSchemasIdDeleteRequest = {
  // number | 
  id: 1,
};

apiInstance.apiSchemasIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response2**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiSchemasIdGet**
> Model200Response1 apiSchemasIdGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiSchemasIdGetRequest = {
  // number | 
  id: 1,
};

apiInstance.apiSchemasIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response1**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiSchemasIdPut**
> Model200Response1 apiSchemasIdPut()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiSchemasIdPutRequest = {
  // number | 
  id: 1,
  // Schema (optional)
  schema: {
    id: 1,
    title: "title_example",
    description: "description_example",
    name: "name_example",
    fields: [
      {
        title: "title_example",
        name: "name_example",
      },
    ],
    kinds: [
      {
        title: "title_example",
        name: "name_example",
      },
    ],
    tagId: 1,
    retentionDays: 1,
  },
};

apiInstance.apiSchemasIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **Schema**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response1**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiSchemasPost**
> Model200Response1 apiSchemasPost()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiSchemasPostRequest = {
  // Schema (optional)
  schema: {
    id: 1,
    title: "title_example",
    description: "description_example",
    name: "name_example",
    fields: [
      {
        title: "title_example",
        name: "name_example",
      },
    ],
    kinds: [
      {
        title: "title_example",
        name: "name_example",
      },
    ],
    tagId: 1,
    retentionDays: 1,
  },
};

apiInstance.apiSchemasPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema** | **Schema**|  |


### Return type

**Model200Response1**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiSessionGet**
> Model200Response8 apiSessionGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.apiSessionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Model200Response8**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiSessionPost**
> Model200Response8 apiSessionPost()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiSessionPostRequest = {
  // Credentials (optional)
  credentials: {
    email: "email_example",
    password: "password_example",
  },
};

apiInstance.apiSessionPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | **Credentials**|  |


### Return type

**Model200Response8**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiSetupRegisterAdminPost**
> User apiSetupRegisterAdminPost()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiSetupRegisterAdminPostRequest = {
  // User (optional)
  user: {
    id: 1,
    name: "name_example",
    email: "email_example",
    password: "password_example",
    passwordDigest: "passwordDigest_example",
    role: null,
    tags: [
      3.14,
    ],
    token: "token_example",
    isRevoked: true,
  },
};

apiInstance.apiSetupRegisterAdminPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |


### Return type

**User**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTagsGet**
> Model200Response12 apiTagsGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.apiTagsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Model200Response12**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTagsIdDelete**
> Model200Response11 apiTagsIdDelete()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiTagsIdDeleteRequest = {
  // number | 
  id: 1,
};

apiInstance.apiTagsIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response11**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTagsIdGet**
> Model200Response13 apiTagsIdGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiTagsIdGetRequest = {
  // number | 
  id: 1,
};

apiInstance.apiTagsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response13**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTagsIdPut**
> Model200Response13 apiTagsIdPut()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiTagsIdPutRequest = {
  // number | 
  id: 1,
  // Tag (optional)
  tag: {
    id: 1,
    name: "name_example",
  },
};

apiInstance.apiTagsIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **Tag**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response13**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTagsPost**
> Model200Response13 apiTagsPost()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiTagsPostRequest = {
  // Tag (optional)
  tag: {
    id: 1,
    name: "name_example",
  },
};

apiInstance.apiTagsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **Tag**|  |


### Return type

**Model200Response13**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersGet**
> Model200Response5 apiUsersGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.apiUsersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Model200Response5**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersIdDelete**
> Model200Response7 apiUsersIdDelete()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiUsersIdDeleteRequest = {
  // number | 
  id: 1,
};

apiInstance.apiUsersIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response7**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersIdGet**
> Model200Response6 apiUsersIdGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiUsersIdGetRequest = {
  // number | 
  id: 1,
};

apiInstance.apiUsersIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response6**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersIdPut**
> Model200Response6 apiUsersIdPut()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiUsersIdPutRequest = {
  // number | 
  id: 1,
  // User (optional)
  user: {
    id: 1,
    name: "name_example",
    email: "email_example",
    password: "password_example",
    passwordDigest: "passwordDigest_example",
    role: null,
    tags: [
      3.14,
    ],
    token: "token_example",
    isRevoked: true,
  },
};

apiInstance.apiUsersIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**Model200Response6**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersPost**
> Model200Response6 apiUsersPost()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiUsersPostRequest = {
  // User (optional)
  user: {
    id: 1,
    name: "name_example",
    email: "email_example",
    password: "password_example",
    passwordDigest: "passwordDigest_example",
    role: null,
    tags: [
      3.14,
    ],
    token: "token_example",
    isRevoked: true,
  },
};

apiInstance.apiUsersPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |


### Return type

**Model200Response6**

### Authorization

[http1](README.md#http1)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


