export function clickOutside(
  node: HTMLElement,
  {
    enabled = true,
    callback,
    exclude = [],
  }: { enabled: boolean; callback: () => void; exclude?: HTMLElement[] }
) {
  const handlePointerDown = (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node;
    if (!node.contains(target) && !exclude.some((el) => el?.contains(target))) {
      callback();
    }
  };

  function addListeners() {
    document.addEventListener("mousedown", handlePointerDown, true);
    document.addEventListener("touchstart", handlePointerDown, true);
  }

  function removeListeners() {
    document.removeEventListener("mousedown", handlePointerDown, true);
    document.removeEventListener("touchstart", handlePointerDown, true);
  }

  if (enabled) addListeners();

  return {
    update({
      enabled,
      exclude: newExclude,
    }: {
      enabled: boolean;
      exclude?: HTMLElement[];
    }) {
      removeListeners();
      exclude = newExclude ?? [];
      if (enabled) addListeners();
    },
    destroy() {
      removeListeners();
    },
  };
}
