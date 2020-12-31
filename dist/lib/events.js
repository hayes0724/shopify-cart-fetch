/**
 * Events
 * ------------------------------------------------------------------------------
 *
 */
export default class CartEvents {
    constructor(bus = new DocumentFragment()) {
        this.bus = bus;
    }
    static publish(type, stage, data) {
        return new CustomEvent(`${type}:${stage}`, {
            detail: data,
        });
    }
    on(event, handler) {
        this.bus.addEventListener(event, handler);
    }
    emit(type, stage, data) {
        this.bus.dispatchEvent(CartEvents.publish(type, stage, data));
    }
}
//# sourceMappingURL=events.js.map