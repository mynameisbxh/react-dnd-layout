import React from 'react';
import { DropTarget } from 'react-dnd';

const target = {
  drop(props, monitor) {
    if (!monitor.didDrop()) {
      props.onDrop(monitor.getItem());
    }
  }
};

const Separator = ({ direction, connectDropTarget, isOverCurrent, canDrop }) => (
  <div style={{
    position: 'relative',
    zIndex: 10,
    backgroundColor: '#b535e5'
  }}>
    {connectDropTarget(
      <div style={{
        display: canDrop ? 'flex' : 'none',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: canDrop ? direction === 'vertical' ? 20 : '100%' : 0,
        height: canDrop ? direction === 'vertical' ? '100%' : 20 : 0,
        top: direction === 'vertical' ? 0 : -10,
        left: direction === 'vertical' ? -10 : 0
      }}>
        {isOverCurrent ? (<div style={{
          width: direction === 'vertical' ? 4 : '100%',
          height: direction === 'vertical' ? '100%' : 4,
          borderRadius: 2,
          backgroundColor: 'rgba(25, 230, 240, 1)'
        }}/>) : null}
      </div>
    )}
  </div>
);

export default DropTarget('Component', target, (connect, monitor) => ({
  isOverCurrent: monitor.isOver({ shallow: true }),
  connectDropTarget: connect.dropTarget(),
  canDrop: monitor.canDrop(),
}))(Separator);