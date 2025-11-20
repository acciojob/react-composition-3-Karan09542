import React, { Children } from "react";

const Tooltip = ({ tooltiptext, children }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  console.log(children)
  return React.cloneElement(
    children,
    {
      onMouseEnter: () => setShowTooltip(true),
      onMouseLeave: () => setShowTooltip(false),
    },
    <>
      {children.props.children}
      <div className={showTooltip ? "tooltiptext" : "hidden"}>{tooltiptext}</div>
    </>
  );
};

export default Tooltip;
