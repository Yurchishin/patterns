import { EventManager } from "./EventManager";
import { LoggerListener, EmailListener } from "./EventListener";

const eventManager = new EventManager()

const jsLogger = new LoggerListener('index.ts')
const tsLogger = new LoggerListener('index.js')

const yurararyLogger = new EmailListener('yurarary158@gmail.com')
const yuryLogger = new EmailListener('yury@gmail.com')

eventManager.subscribe('onLog', jsLogger)
eventManager.subscribe('onLog', tsLogger)
eventManager.subscribe('onEmail', yurararyLogger)
eventManager.subscribe('onEmail', yuryLogger)

eventManager.notify('onLog', 'Log')
eventManager.notify('onEmail', 'Email')
