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
import { V1PortStatus } from './v1PortStatus';

/**
* LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
*/
export class V1LoadBalancerIngress {
    /**
    * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
    */
    'hostname'?: string;
    /**
    * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
    */
    'ip'?: string;
    /**
    * Ports is a list of records of service ports If used, every port defined in the service should have an entry in it
    */
    'ports'?: Array<V1PortStatus>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string"
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<V1PortStatus>"
        }    ];

    static getAttributeTypeMap() {
        return V1LoadBalancerIngress.attributeTypeMap;
    }
}

