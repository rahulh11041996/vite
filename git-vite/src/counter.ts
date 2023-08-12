export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


function feature1() : void {
  // * Commited changes dwghjdwgdgwgdghwgdhwdhwgdhwgd
  return
}

function feature2() : void {
  // * commit for feat 2
  return
}

function feature2poin1() : void {
  // * commit for feat 2
  return
}
