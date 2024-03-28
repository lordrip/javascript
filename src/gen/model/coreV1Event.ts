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
import { CoreV1EventSeries } from './coreV1EventSeries';
import { V1EventSource } from './v1EventSource';
import { V1MicroTime } from '../../types';
import { V1ObjectMeta } from './v1ObjectMeta';
import { V1ObjectReference } from './v1ObjectReference';

/**
* Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
*/
export class CoreV1Event {
    /**
    * What action was taken/failed regarding to the Regarding object.
    */
    'action'?: string;
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * The number of times this event has occurred.
    */
    'count'?: number;
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'eventTime'?: V1MicroTime;
    /**
    * The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
    */
    'firstTimestamp'?: Date;
    'involvedObject': V1ObjectReference;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    /**
    * The time at which the most recent occurrence of this event was recorded.
    */
    'lastTimestamp'?: Date;
    /**
    * A human-readable description of the status of this operation.
    */
    'message'?: string;
    'metadata': V1ObjectMeta;
    /**
    * This should be a short, machine understandable string that gives the reason for the transition into the object\'s current status.
    */
    'reason'?: string;
    'related'?: V1ObjectReference;
    /**
    * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
    */
    'reportingComponent'?: string;
    /**
    * ID of the controller instance, e.g. `kubelet-xyzf`.
    */
    'reportingInstance'?: string;
    'series'?: CoreV1EventSeries;
    'source'?: V1EventSource;
    /**
    * Type of this event (Normal, Warning), new types could be added in the future
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "eventTime",
            "baseName": "eventTime",
            "type": "V1MicroTime"
        },
        {
            "name": "firstTimestamp",
            "baseName": "firstTimestamp",
            "type": "Date"
        },
        {
            "name": "involvedObject",
            "baseName": "involvedObject",
            "type": "V1ObjectReference"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "lastTimestamp",
            "baseName": "lastTimestamp",
            "type": "Date"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "related",
            "baseName": "related",
            "type": "V1ObjectReference"
        },
        {
            "name": "reportingComponent",
            "baseName": "reportingComponent",
            "type": "string"
        },
        {
            "name": "reportingInstance",
            "baseName": "reportingInstance",
            "type": "string"
        },
        {
            "name": "series",
            "baseName": "series",
            "type": "CoreV1EventSeries"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "V1EventSource"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CoreV1Event.attributeTypeMap;
    }
}

