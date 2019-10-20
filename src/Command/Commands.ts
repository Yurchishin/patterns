import { Application } from './Application'
import { TextEditor } from './TextEditor'

export abstract class Command {
	protected readonly app: Application;
	protected readonly editor: TextEditor;
	protected backup: string;

	protected constructor(app: Application, editor: TextEditor) {
		this.app = app
		this.editor = editor
		this.backup = ''
	}

	abstract execute(): boolean;

	saveBackup(): Command {
		this.backup = this.editor.text
		return this
	}

	undo(): Command {
		this.editor.text = this.backup
		return this
	}
}

export class WriteCommand extends Command {
	private readonly text: string;

	constructor(app: Application, editor: TextEditor, text: string) {
		super(app, editor);
		this.text = text;
	}

	execute(): boolean {
		this.saveBackup()
		this.editor.writeText(this.text)
		this.editor.unselectText()
		return true
	}
}


export class SelectCommand extends Command {
	private readonly text: string;

	constructor(app: Application, editor: TextEditor, text: string) {
		super(app, editor);
		this.text = text;
	}

	execute(): boolean {
		this.editor.selectText(this.text)
		return false
	}
}

export class CopyCommand extends Command {

	constructor(app: Application, editor: TextEditor) {
		super(app, editor);
	}

	execute(): boolean {
		this.app.clipboard = this.editor.getSelectedText()
		return false
	}
}

export class CutCommand extends Command {

	constructor(app: Application, editor: TextEditor) {
		super(app, editor);
	}

	execute(): boolean {
		this.saveBackup()
		this.app.clipboard = this.editor.getSelectedText()
		this.editor.deleteSelectedText()
		return true
	}
}

export class UndoCommand extends Command {

	constructor(app: Application, editor: TextEditor) {
		super(app, editor);
	}

	execute(): boolean {
		this.app.undo()
		this.editor.unselectText()
		return false
	}
}

export class InsertCommand extends Command {

	constructor(app: Application, editor: TextEditor) {
		super(app, editor);
	}

	execute(): boolean {
		this.saveBackup()

		if(this.editor.getSelectedText()) {
			this.editor.writeText(this.app.clipboard)
			this.editor.unselectText()
		}
		else {
			throw new Error('Doesn`t selected text from inserting')
		}

		return true
	}
}

export class SelectAllCommand extends Command {

	constructor(app: Application, editor: TextEditor) {
		super(app, editor);
	}

	execute(): boolean {
		this.editor.selectText(this.editor.text)
		return false
	}
}
