const app = "I don't do much."
var kittens = ["Milo", "Otis","Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  //kittens.unshift(name)
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name){
  return [...kittens, name]
}
function prependKitten(name){
  return [name, ...kittens]
}
function removeLastKitten(){
  return kittens.slice(kittens.length -1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}
