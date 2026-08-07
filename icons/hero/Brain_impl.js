let Component;
var Brain_default = (React) => {
  if (!Component) {
    const BrainIcon = React.forwardRef(function BrainIcon2({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ React.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
      }, props), title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
      /* @__PURE__ */ React.createElement("path", {
        d: "M248,120a48.05,48.05,0,0,0-40-47.32V72a48,48,0,0,0-88-26.49A48,48,0,0,0,32,72v.68A48,48,0,0,0,40,216H216a48,48,0,0,0,32-83.6V120ZM216,200H40a32,32,0,0,1-4.28-63.77A8,8,0,0,0,43,128V72a32,32,0,0,1,61.35-12.8,8,8,0,0,0,7.32,4.8h.64a8,8,0,0,0,7.32-4.8A32,32,0,0,1,181,57.46,8,8,0,0,0,213,72v56a8,8,0,0,0,7.28,7.95A32,32,0,0,1,216,200Z"
      }));
    });
    Component = BrainIcon;
  }
  return Component;
};
const __FramerMetadata__ = {
  exports: {
    default: { type: "reactComponent", slots: [], annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" }
  }
};
export { __FramerMetadata__, Brain_default as default };
