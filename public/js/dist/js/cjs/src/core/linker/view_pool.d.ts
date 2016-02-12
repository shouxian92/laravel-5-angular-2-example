import { OpaqueToken } from 'angular2/src/core/di';
import * as viewModule from './view';
export declare const APP_VIEW_POOL_CAPACITY: OpaqueToken;
export declare class AppViewPool {
    /** @internal */
    _poolCapacityPerProtoView: number;
    /** @internal */
    _pooledViewsPerProtoView: Map<viewModule.AppProtoView, viewModule.AppView[]>;
    constructor(poolCapacityPerProtoView: any);
    getView(protoView: viewModule.AppProtoView): viewModule.AppView;
    returnView(view: viewModule.AppView): boolean;
}
