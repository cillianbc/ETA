function siblings(selector) {
  var element = document.querySelector(selector)
  var childElements = Array.from(element.parentNode.children)
  return childElements.filter(function(child) {
    return child !== element
  })
}

function closest(element, query) {
  while (!!element && element !== document) {
    if (element.matches(query)) {
      return element
    }
    element = element.parentNode
  }
  return null
}

function delegate(selector, eventName, targetSelector, listener) {
  document.querySelector(selector).addEventListener(eventName, function (event) {
    var closestMatch = closest(event.target, targetSelector)
    if (closestMatch) {
      event.delegateTarget = closestMatch
      listener(event)
    }
  })
}