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
import { V1NonResourceRule } from './v1NonResourceRule';
import { V1ResourceRule } from './v1ResourceRule';

/**
* SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it\'s safe to assume the subject has that permission, even if that list is incomplete.
*/
export class V1SubjectRulesReviewStatus {
    /**
    * EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn\'t support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
    */
    'evaluationError'?: string;
    /**
    * Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn\'t support rules evaluation.
    */
    'incomplete': boolean;
    /**
    * NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn\'t significant, may contain duplicates, and possibly be incomplete.
    */
    'nonResourceRules': Array<V1NonResourceRule>;
    /**
    * ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn\'t significant, may contain duplicates, and possibly be incomplete.
    */
    'resourceRules': Array<V1ResourceRule>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "evaluationError",
            "baseName": "evaluationError",
            "type": "string"
        },
        {
            "name": "incomplete",
            "baseName": "incomplete",
            "type": "boolean"
        },
        {
            "name": "nonResourceRules",
            "baseName": "nonResourceRules",
            "type": "Array<V1NonResourceRule>"
        },
        {
            "name": "resourceRules",
            "baseName": "resourceRules",
            "type": "Array<V1ResourceRule>"
        }    ];

    static getAttributeTypeMap() {
        return V1SubjectRulesReviewStatus.attributeTypeMap;
    }
}

