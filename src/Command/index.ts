import { Application } from "./Application";
import { TextEditor } from "./TextEditor";

const editor = new TextEditor()
const app = new Application(editor)

console.log(app.onWrite('юра'))
console.log(app.onWrite(' '))
console.log(app.onWrite('рибак'))

console.log(app.onSelect('рибак'))
console.log(app.onCopy())
console.log(app.onCut())
console.log(app.onInsert())
console.log(app.onCancel())
console.log(app.onSelectAll())
console.log(app.onCancel())
