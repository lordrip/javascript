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
import { V1ObjectReference } from './v1ObjectReference';

/**
* CronJobStatus represents the current state of a cron job.
*/
export class V1CronJobStatus {
    /**
    * A list of pointers to currently running jobs.
    */
    'active'?: Array<V1ObjectReference>;
    /**
    * Information when was the last time the job was successfully scheduled.
    */
    'lastScheduleTime'?: Date;
    /**
    * Information when was the last time the job successfully completed.
    */
    'lastSuccessfulTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "Array<V1ObjectReference>"
        },
        {
            "name": "lastScheduleTime",
            "baseName": "lastScheduleTime",
            "type": "Date"
        },
        {
            "name": "lastSuccessfulTime",
            "baseName": "lastSuccessfulTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V1CronJobStatus.attributeTypeMap;
    }
}

