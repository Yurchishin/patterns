import {State, ReadyState} from "./State";

export class AudioPlayer {
	state: State
	playlist: string[]
	currentSong: string
	played: boolean
	playedIndex: number

	constructor(playlist: string[]) {
		this.state = new ReadyState(this)
		this.playlist = playlist
		this.played = false
		this.playedIndex = 0
		this.currentSong = this.playlist[this.playedIndex]
	}

	changeState(state: State): AudioPlayer {
		this.state = state
		return this
	}

	clickLock(): AudioPlayer {
		this.state.clickLock()
		return this

	}

	clickPlay(): AudioPlayer {
		this.state.clickPlay()
		return this

	}

	clickNext(): AudioPlayer {
		this.state.clickNext()
		return this

	}

	clickPrevious(): AudioPlayer {
		this.state.clickPrevious()
		return this
	}

	startPlay(): AudioPlayer {
		this.currentSong = this.playlist[this.playedIndex]
		this.played = true
		return this
	}

	stopPlay(): AudioPlayer {
		this.played = false
		return this
	}

	playNextSong(): AudioPlayer {
		const nextSong = this.playlist[this.playedIndex + 1]

		if (nextSong) {
			this.playedIndex = this.playedIndex + 1
			this.currentSong = nextSong
		} else {
			this.playedIndex = 0
			this.currentSong = this.playlist[this.playedIndex]
		}

		return this
	}

	playPreviousSong(): AudioPlayer {
		const previousSong = this.playlist[this.playedIndex - 1]

		if (previousSong) {
			this.playedIndex = this.playedIndex - 1
			this.currentSong = previousSong
		} else {
			this.playedIndex = this.playlist.length - 1
			this.currentSong = this.playlist[this.playedIndex]
		}

		return this
	}
}
