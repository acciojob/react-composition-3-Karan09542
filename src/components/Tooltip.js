import React from "react";

const Tooltip = ({ tooltiptext, children }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {React.cloneElement(
        children,
        {},
        <>
          {children.props.children}
          {showTooltip && <div className="tooltiptext">{tooltiptext}</div>}
        </>
      )}
    </div>
  );
};

export default Tooltip;
