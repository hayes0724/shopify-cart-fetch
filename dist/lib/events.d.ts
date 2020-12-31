/**
 * Events
 * ------------------------------------------------------------------------------
 *
 */
import { EventType, EventStage, EventData } from "./types";
export default class CartEvents {
    bus: EventTarget;
    constructor(bus?: EventTarget);
    static publish(type: EventType, stage: EventStage, data?: CustomEvent["detail"]): CustomEvent<unknown>;
    on(event: string, handler: EventListener): void;
    emit(type: EventType, stage: EventStage, data?: EventData): void;
}
//# sourceMappingURL=events.d.ts.map