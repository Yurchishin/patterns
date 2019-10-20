import { Mediator } from "./Mediator";

export class Component {
	protected dialog: Mediator

	constructor(dialog: Mediator) {
		this.dialog = dialog
	}


	click(): Component {
		this.dialog.notify(this, 'click')
		return this
	}

	keypress(): Component {
		this.dialog.notify(this, 'keypress')
		return this
	}
}

export class Checkbox extends Component {
	value: string;

	constructor(dialog: Mediator, value: string) {
		super(dialog)
		this.value = value
	}

	check(): Checkbox {
		this.dialog.notify(this, 'check')
		return this
	}
}
