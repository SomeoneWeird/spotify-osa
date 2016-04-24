# spotify-osa

Control Spotify OSX client using OSA commands

## Usage

### Library

```
var spotify = require('spotify-osa')
```

All functions accept an optional callback as last parameter.

#### spotify.play(id)

If id is specified, start playing that track/playlist/album, else just starts playback of the current song.

#### spotify.pause()

If playing, pauses.

#### spotify.toggle()

Toggles playback.

#### spotify.next()

Skips to next track.

#### spotify.back()

Starts playing previous track.
