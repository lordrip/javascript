/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1IngressServiceBackend } from './v1IngressServiceBackend';
import { V1TypedLocalObjectReference } from './v1TypedLocalObjectReference';

/**
* IngressBackend describes all endpoints for a given service and port.
*/
export class V1IngressBackend {
    'resource'?: V1TypedLocalObjectReference;
    'service'?: V1IngressServiceBackend;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resource",
            "baseName": "resource",
            "type": "V1TypedLocalObjectReference"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "V1IngressServiceBackend"
        }    ];

    static getAttributeTypeMap() {
        return V1IngressBackend.attributeTypeMap;
    }
}

