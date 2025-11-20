import React, { Children } from "react";

const Tooltip = ({ tooltiptext, children }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  return React.cloneElement(
    children,
    {
      onMouseEnter: () => setShowTooltip(true),
      onMouseLeave: () => setShowTooltip(false),
    },
    <>
      {children.props.children}
      {showTooltip && <div className="tooltiptext">{tooltiptext}</div>}
    </>
  );
};

export default Tooltip;
