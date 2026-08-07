let Component;
var NumberCircleOne_default = (React) => {
  if (!Component) {
    const NumberCircleOneIcon = React.forwardRef(function NumberCircleOneIcon2({
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
        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-136v96a8,8,0,0,1-16,0V91.31l-12.42,6.21a8,8,0,0,1-7.16-14.31l24-12A8,8,0,0,1,140,80Z"
      }));
    });
    Component = NumberCircleOneIcon;
  }
  return Component;
};
const __FramerMetadata__ = {
  exports: {
    default: { type: "reactComponent", slots: [], annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" }
  }
};
export { __FramerMetadata__, NumberCircleOne_default as default };
