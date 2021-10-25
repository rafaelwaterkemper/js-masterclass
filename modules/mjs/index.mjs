import { print, changeTest } from './cached.mjs'

print("rafa")
// second.printS("Guga")
changeTest("final")
import { printS } from './second-require.mjs'
import { printUpperCase } from './cached.mjs'
print("rafa")
printUpperCase("rafa")
printS("Guga")