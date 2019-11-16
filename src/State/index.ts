import {AudioPlayer} from "./AudioPlayer";

const playlist = ['a', 'b', 'c']

const player = new AudioPlayer(playlist)

console.log(player.clickLock())
console.log(player.clickPlay())
console.log(player.clickNext())
console.log(player.clickPrevious())
console.log(player.clickLock())
console.log(player.clickPlay())
console.log(player.clickNext())
console.log(player.clickPrevious())
