import '@testing-library/jest-dom';
// expose axe to tests if needed
import axe from 'axe-core';
// minimal canvas polyfill for axe color contrast checks in jsdom
if (typeof HTMLCanvasElement !== 'undefined' && !HTMLCanvasElement.prototype.getContext) {
  HTMLCanvasElement.prototype.getContext = function () {
    return {
      getImageData: () => ({ data: [] }),
      putImageData: () => {},
      createImageData: () => [],
      drawImage: () => {},
      setTransform: () => {},
      getContextAttributes: () => ({}),
    };
  };
}

global.axe = axe;