export class TextEditor {
	text: string;
	private selectedText: string;

	constructor() {
		this.text = ''
		this.selectedText = ''
	}

	writeText(text: string): TextEditor {
		this.text = this.text + text
		return this
	}

	getSelectedText(): string {
		return this.selectedText
	}

	selectText(text: string): TextEditor {

		if(this.text.includes(text)){
			this.selectedText = text
		}
		else {
			throw new Error('Selected text not found')
		}

		return this
	}

	unselectText(): TextEditor {
		this.selectedText = ''
		return this
	}

	deleteSelectedText(): TextEditor {
		this.replaceSelectedText('')
		return this
	}

	replaceSelectedText(text: string): TextEditor {
		const regExp = new RegExp(`${this.selectedText}`, 'i')

		this.text = this.text.replace(regExp, text)
		return this
	}
}
