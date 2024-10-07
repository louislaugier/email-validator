import { Element } from '@swagger-api/apidom-core';
import { SchemaElement } from '@swagger-api/apidom-ns-openapi-3-1';
export declare const resolveSchema$refField: (retrievalURI: string, schemaElement: SchemaElement) => string | undefined;
export declare const resolveSchema$idField: (retrievalURI: string, schemaElement: SchemaElement) => string | undefined;
/**
 * Cached version of SchemaElement.refract.
 */
export declare const refractToSchemaElement: {
    <T extends Element>(element: T): any;
    cache: WeakMap<WeakKey, any>;
};
export declare const maybeRefractToSchemaElement: <T extends Element>(element: T) => any;
