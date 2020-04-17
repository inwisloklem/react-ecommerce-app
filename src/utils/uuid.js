import {v4} from 'uuid'

function uuid() {
  return v4().slice(0, 8)
}

export default uuid
