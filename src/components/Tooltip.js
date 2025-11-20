import React from 'react'

const Tooltip = ({tooltiptext,children}) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <div className='tooltip-wrapper' onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        {showTooltip && <div className='tooltiptext'>{tooltiptext}</div>}
        {children}
    </div>
  )
}

export default Tooltip