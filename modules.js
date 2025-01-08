//globals - no window

//__dirname - path to current directory
//__filename - file name
//require function to use modules
//module -info about current module(file)
//process - info about where the program is beiing executed
//every file in node is a module


const names = require('./4-names')

const sayHi = require('./5-utils')

const data = require('./6-alternative-flavour')


require('./7-mind-grenade')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)