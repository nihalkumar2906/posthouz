let Component;
var Home_default = (React) => {
  if (!Component) {
    const HomeIcon = React.forwardRef(function HomeIcon2({
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
        d: "M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168H104v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.44,0,.77.77,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
      }));
    });
    Component = HomeIcon;
  }
  return Component;
};
const __FramerMetadata__ = {
  exports: {
    default: { type: "reactComponent", slots: [], annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" }
  }
};
export { __FramerMetadata__, Home_default as default };
