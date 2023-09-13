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
import { V1LocalObjectReference } from './v1LocalObjectReference';

/**
* ScaleIOVolumeSource represents a persistent ScaleIO volume
*/
export class V1ScaleIOVolumeSource {
    /**
    * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\".
    */
    'fsType'?: string;
    /**
    * gateway is the host address of the ScaleIO API Gateway.
    */
    'gateway': string;
    /**
    * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
    */
    'protectionDomain'?: string;
    /**
    * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    'secretRef': V1LocalObjectReference;
    /**
    * sslEnabled Flag enable/disable SSL communication with Gateway, default false
    */
    'sslEnabled'?: boolean;
    /**
    * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
    */
    'storageMode'?: string;
    /**
    * storagePool is the ScaleIO Storage Pool associated with the protection domain.
    */
    'storagePool'?: string;
    /**
    * system is the name of the storage system as configured in ScaleIO.
    */
    'system': string;
    /**
    * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
    */
    'volumeName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string"
        },
        {
            "name": "gateway",
            "baseName": "gateway",
            "type": "string"
        },
        {
            "name": "protectionDomain",
            "baseName": "protectionDomain",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1LocalObjectReference"
        },
        {
            "name": "sslEnabled",
            "baseName": "sslEnabled",
            "type": "boolean"
        },
        {
            "name": "storageMode",
            "baseName": "storageMode",
            "type": "string"
        },
        {
            "name": "storagePool",
            "baseName": "storagePool",
            "type": "string"
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "string"
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1ScaleIOVolumeSource.attributeTypeMap;
    }
}

