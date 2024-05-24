

export async function loadFonts(fontNames = []) {
  // Fail silently if browser doesn't support font loading.
  if (!('fonts' in document)) return;

  const fontLoading = [];

  for (const i of fontNames) {
    if (typeof i === 'string') fontLoading.push(document.fonts.load('1em ' + i));
  }

  await Promise.all(fontLoading);
}

/**
 * Return an array of getters and setters on the instance
 */
export function getInstanceProperties(instance) {
  return {
    getters:
      Object.entries(
        Object.getOwnPropertyDescriptors(
          Reflect.getPrototypeOf(instance)
        )
      )
      .filter(e => typeof e[1]['get'] === 'function' && e[0] !== '__proto__')
      .map(e => e[0]),

    setters:
      Object.entries(
        Object.getOwnPropertyDescriptors(
          Reflect.getPrototypeOf(instance)
        )
      )
      .filter(e => typeof e[1]['set'] === 'function' && e[0] !== '__proto__')
      .map(e => e[0]),
  };
}

/**
 * Wrapper for `setTimeout` that can be awaited.
 * Resolve after a certain duration (in milliseconds).
 */
export async function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}