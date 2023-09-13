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
import { V1IngressLoadBalancerIngress } from './v1IngressLoadBalancerIngress';

/**
* IngressLoadBalancerStatus represents the status of a load-balancer.
*/
export class V1IngressLoadBalancerStatus {
    /**
    * ingress is a list containing ingress points for the load-balancer.
    */
    'ingress'?: Array<V1IngressLoadBalancerIngress>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ingress",
            "baseName": "ingress",
            "type": "Array<V1IngressLoadBalancerIngress>"
        }    ];

    static getAttributeTypeMap() {
        return V1IngressLoadBalancerStatus.attributeTypeMap;
    }
}

