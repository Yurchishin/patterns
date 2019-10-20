import { Checkbox, Component } from "./Components";
import { Mediator } from "./Mediator";

export class GenderDialog implements Mediator {
	readonly manCheckbox: Checkbox
	readonly womanCheckbox: Checkbox
	private gender?: string

	constructor() {
		this.manCheckbox = new Checkbox(this, 'man')
		this.womanCheckbox = new Checkbox(this, 'woman')
	}

	notify(sender: Component, event: string): void {
		if(event == 'check') {
			if(sender === this.manCheckbox) {
				this.gender = this.manCheckbox.value
			}
			if(sender === this.womanCheckbox) {
				this.gender = this.womanCheckbox.value
			}
		}
	}
}
