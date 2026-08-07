let Component;
var Timer_default = (React) => {
  if (!Component) {
    const TimerIcon = React.forwardRef(function TimerIcon2({
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
        d: "M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Zm88,72.69-48,48A8,8,0,0,1,124.69,125.31l48-48A8,8,0,0,1,184,88.69Z"
      }));
    });
    Component = TimerIcon;
  }
  return Component;
};
const __FramerMetadata__ = {
  exports: {
    default: { type: "reactComponent", slots: [], annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" }
  }
};
export { __FramerMetadata__, Timer_default as default };
