let Component;
var CurrencyDollar_default = (React) => {
  if (!Component) {
    const CurrencyDollarIcon = React.forwardRef(function CurrencyDollarIcon2({
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
        d: "M152,120H136V72h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48H136V40a8,8,0,0,0-16,0V56H104a48,48,0,0,0,0,96h16v48H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-48,0a32,32,0,0,1,0-64h16v64Zm48,80H136V136h16a32,32,0,0,1,0,64Z"
      }));
    });
    Component = CurrencyDollarIcon;
  }
  return Component;
};
const __FramerMetadata__ = {
  exports: {
    default: { type: "reactComponent", slots: [], annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" }
  }
};
export { __FramerMetadata__, CurrencyDollar_default as default };
