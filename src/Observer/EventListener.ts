export interface EventListener {
    update(message: string): EventListener;
}

export class EmailListener implements EventListener {
  private email: string

  constructor(email: string) {
    this.email = email
  }

  update(message: string): EventListener {
    console.log(`EmailListener (${this.email}): ${message}`)
    return this
  }
}

export class LoggerListener implements EventListener {
  private file: string

  constructor(file: string) {
    this.file = file
  }

  update(message: string): EventListener {
    console.log(`LoggerListener (${this.file}): ${message}`)
    return this
  }
}
