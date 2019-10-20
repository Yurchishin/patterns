import {
	Command,
	CopyCommand,
	WriteCommand,
	SelectCommand,
	CutCommand,
	UndoCommand,
	InsertCommand,
	SelectAllCommand,
} from "./Commands";
import { TextEditor } from "./TextEditor";
import { CommandHistory } from "./CommandHistory";

export class Application {
	clipboard: string
	private readonly editor: TextEditor
	private readonly history: CommandHistory

	constructor(editor: TextEditor) {
		this.clipboard = ''
		this.editor = editor
		this.history = new CommandHistory()
	}

	executeCommand(command: Command): Application {
		if (command.execute()){
			this.history.push(command)
		}

		return this
	}

	undo(): Application {
		const command = this.history.pop()

		if (command) {
			command.undo()
		}

		return this
	}

	onWrite(text: string): Application {
		return this.executeCommand(
			new WriteCommand(this, this.editor, text)
		)
	}

	onSelect(text: string): Application {
		return this.executeCommand(
			new SelectCommand(this, this.editor, text)
		)
	}

	onCopy(): Application {
		return this.executeCommand(
			new CopyCommand(this, this.editor)
		)
	}

	onCut(): Application {
		return this.executeCommand(
			new CutCommand(this, this.editor)
		)
	}

	onCancel(): Application {
		return this.executeCommand(
			new UndoCommand(this, this.editor)
		)
	}

	onInsert(): Application {
		return this.executeCommand(
			new InsertCommand(this, this.editor)
		)
	}

	onSelectAll(): Application {
		return this.executeCommand(
			new SelectAllCommand(this, this.editor)
		)
	}
}
