import { Component } from "./Components";

export interface Mediator {
	notify(sender: Component, event: string): void;
}
