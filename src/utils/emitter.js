import EventEmitter from 'event'
const _emitter = new EventEmitter()
_emitter.setMaxListeners(0)

export const emitter = _emitter