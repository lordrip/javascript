/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: release-1.26
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1ObjectMeta } from './V1ObjectMeta';
import { V1alpha1ResourceClaimSpec } from './V1alpha1ResourceClaimSpec';
import { HttpFile } from '../http/http';

/**
* ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
*/
export class V1alpha1ResourceClaimTemplateSpec {
    'metadata'?: V1ObjectMeta;
    'spec': V1alpha1ResourceClaimSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1alpha1ResourceClaimSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ResourceClaimTemplateSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

