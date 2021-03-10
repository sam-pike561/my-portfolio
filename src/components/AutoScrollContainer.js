import React from 'react';

const export default AutoScrollContainer ({ items }) => {
  return (
    <div className="autoscroll-container">
      <div className="autoscroll-list">
        {items && items.map((item, index) =>
          <p key="index">{`${index + 1}. ${item}`}</p>
        )}
      </div>
    </div>
  )
}
