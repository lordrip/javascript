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
import { V1ConfigMapEnvSource } from './v1ConfigMapEnvSource';
import { V1SecretEnvSource } from './v1SecretEnvSource';

/**
* EnvFromSource represents the source of a set of ConfigMaps
*/
export class V1EnvFromSource {
    'configMapRef'?: V1ConfigMapEnvSource;
    /**
    * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
    */
    'prefix'?: string;
    'secretRef'?: V1SecretEnvSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configMapRef",
            "baseName": "configMapRef",
            "type": "V1ConfigMapEnvSource"
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1SecretEnvSource"
        }    ];

    static getAttributeTypeMap() {
        return V1EnvFromSource.attributeTypeMap;
    }
}

