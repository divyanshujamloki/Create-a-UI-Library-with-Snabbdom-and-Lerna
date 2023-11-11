// packages/ui-library/src/index.js
import { init } from "snabbdom/build/package/init";
import { h } from "snabbdom/build/package/h";

const patch = init([]);

export function createApp(container) {
  let state = {
    count: 0,
  };

  function render() {
    return h("div", [
      h("h1", state.count),
      h("button", { on: { click: handleClick } }, "Add"),
    ]);
  }

  function updateState(newState) {
    state = { ...state, ...newState };
    updateView();
  }

  function handleClick() {
    updateState({ count: state.count + 1 });
  }

  function updateView() {
    const newVNode = render();
    patch(container, newVNode);
  }

  console.log("Component mounted");
  updateView();

  return {
    updateState,
  };
}
