import * as add from './add'
import * as deleteCommand from './delete'
import * as getMe from './getMe'
import * as list from './list'

function allWatch() {
  const commandList = [add, deleteCommand, list, getMe]
  commandList.forEach(command => {
    command.watch()
  })
}

export {
  add,
  deleteCommand,
  getMe,
  list,
  allWatch
}
