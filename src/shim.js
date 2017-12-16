// Remove requestAnimationFrame warning in React 16
global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};