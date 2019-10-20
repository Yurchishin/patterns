import { EventListener } from "./EventListener";

interface Listeners {
	onEmail: Array<EventListener>;
	onLog: Array<EventListener>;
}

export class EventManager {
	private readonly listeners: Listeners;

	constructor() {
		this.listeners = {
			onEmail: [],
			onLog: [],
		}
	}

	subscribe(eventType: keyof Listeners, listener: EventListener): EventManager {
		this.listeners[eventType] = [ ...this.listeners[eventType], listener ]
		return this
	}

	unsubscribe(eventType: keyof Listeners, listener: EventListener): EventManager {
		this.listeners[eventType] = this.listeners[eventType].filter(item => item !== listener)
		return this
	}

	notify(eventType: keyof Listeners, message: string): EventManager {
		this.listeners[eventType].forEach(listener => listener.update(message))
		return this
	}
}
