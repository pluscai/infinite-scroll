const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

export const isScroll = (el, vertical) => {
  
    const determinedDirection = vertical !== null && vertical !== undefined;
    const overflow = determinedDirection
      ? vertical
        ? getStyle(el, 'overflow-y')
        : getStyle(el, 'overflow-x')
      : getStyle(el, 'overflow');
    console.log("getStyle==",getStyle(el,'overflow-y'))
    return overflow.match(/(scroll|auto|overlay)/);
};

export const getScrollContainer = (el, vertical) => {
  
    let parent = el;
    while (parent) {
      if ([window, document, document.documentElement].includes(parent)) {
        return window;
      }
      if (isScroll(parent, vertical)) {
        return parent;
      }
      parent = parent.parentNode;
    }
  
    return parent;
  };

/* istanbul ignore next */
export const getStyle = function(element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};
