import osa from 'osa'

export function cmd (fn, ...args) {
  let done = args[args.length - 1]
  if (!done || typeof done !== 'function') {
    done = () => {}
  } else {
    done = args.pop()
  }
  args = args.filter(Boolean).map((arg) => JSON.stringify(arg))
  if (args.length > 1) {
    args = args.join(',')
  } else {
    args = args[0]
  }
  let str = `Application('Spotify').${fn}(${args})`
  osa(str, done)
}

export function play (id, cb) {
  if (id && typeof id !== 'function') {
    return cmd('playTrack', id, cb)
  }
  cmd('play', cb)
}

export function pause (cb) {
  cmd('pause', cb)
}

export function toggle (cb) {
  cmd('playpause', cb)
}

export function next (cb) {
  cmd('nextTrack', cb)
}

export function back (cb) {
  cmd('previousTrack', cb)
}
