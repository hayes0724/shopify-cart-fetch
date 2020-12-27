/**
 * Events
 * ------------------------------------------------------------------------------
 *
 */

import {EventType, EventStage, EventData} from "./types";

export default class CartEvents {

  public bus: EventTarget

  constructor(bus: EventTarget = new DocumentFragment()) {
    this.bus = bus
  }

  static publish(
    type: EventType,
    stage: EventStage,
    data?: CustomEvent["detail"]
  ): CustomEvent<unknown> {
    return new CustomEvent(`${type}:${stage}`, {
      detail: data,
    });
  }

  on(event: string, handler: EventListener): void {
    this.bus.addEventListener(event, handler)
  }

  emit(type: EventType, stage: EventStage, data?: EventData): void {
    this.bus.dispatchEvent(CartEvents.publish(type, stage, data))
  }
}
