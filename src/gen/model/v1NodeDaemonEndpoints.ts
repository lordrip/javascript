/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1DaemonEndpoint } from './v1DaemonEndpoint';

/**
* NodeDaemonEndpoints lists ports opened by daemons running on the Node.
*/
export class V1NodeDaemonEndpoints {
    'kubeletEndpoint'?: V1DaemonEndpoint;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kubeletEndpoint",
            "baseName": "kubeletEndpoint",
            "type": "V1DaemonEndpoint"
        }    ];

    static getAttributeTypeMap() {
        return V1NodeDaemonEndpoints.attributeTypeMap;
    }
}

