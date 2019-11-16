/* eslint-disable @typescript-eslint/no-use-before-define */
import {AudioPlayer} from "./AudioPlayer";

export abstract class State {
	player: AudioPlayer

	protected constructor(player: AudioPlayer) {
		this.player = player
	}

	abstract clickLock(): State

	abstract clickPlay(): State

	abstract clickNext(): State

	abstract clickPrevious(): State
}

export class PlayingState extends State {
	constructor(player: AudioPlayer) {
		super(player)
	}

	clickLock(): State {
		this.player.changeState(new LockedState(this.player))
		return this
	}

	clickPlay(): State {
		this.player.stopPlay()
		this.player.changeState(new ReadyState(this.player))
		return this
	}

	clickNext(): State {
		this.player.playNextSong()
		return this
	}

	clickPrevious(): State {
		this.player.playPreviousSong()
		return this
	}
}

export class ReadyState extends State {
	constructor(player: AudioPlayer) {
		super(player)
	}

	clickLock(): State {
		this.player.changeState(new LockedState(this.player))
		return this
	}

	clickPlay(): State {
		this.player.startPlay()
		this.player.changeState(new PlayingState(this.player))
		return this
	}

	clickNext(): State {
		this.player.playNextSong()
		this.player.changeState(new PlayingState(this.player))
		return this
	}

	clickPrevious(): State {
		this.player.playPreviousSong()
		this.player.changeState(new PlayingState(this.player))
		return this
	}
}

export class LockedState extends State {
	constructor(player: AudioPlayer) {
		super(player)
	}

	clickLock(): State {
		if (this.player.played) {
			this.player.changeState(new PlayingState(this.player))
		}
		this.player.changeState(new ReadyState(this.player))
		return this
	}

	clickPlay(): State {
		return this
	}

	clickNext(): State {
		return this
	}

	clickPrevious(): State {
		return this
	}
}
