import {Command} from "./Commands";

export class CommandHistory {
	private history: Array<Command>

	constructor() {
		this.history = []
	}

	push(command: Command): CommandHistory {
		this.history = [ ...this.history, command ]

		return this
	}

	pop(): Command | undefined {
		return this.history.pop()
	}
}
