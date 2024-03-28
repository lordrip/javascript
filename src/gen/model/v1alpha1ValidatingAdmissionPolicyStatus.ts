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
import { V1Condition } from './v1Condition';
import { V1alpha1TypeChecking } from './v1alpha1TypeChecking';

/**
* ValidatingAdmissionPolicyStatus represents the status of a ValidatingAdmissionPolicy.
*/
export class V1alpha1ValidatingAdmissionPolicyStatus {
    /**
    * The conditions represent the latest available observations of a policy\'s current state.
    */
    'conditions'?: Array<V1Condition>;
    /**
    * The generation observed by the controller.
    */
    'observedGeneration'?: number;
    'typeChecking'?: V1alpha1TypeChecking;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1Condition>"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "typeChecking",
            "baseName": "typeChecking",
            "type": "V1alpha1TypeChecking"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ValidatingAdmissionPolicyStatus.attributeTypeMap;
    }
}

