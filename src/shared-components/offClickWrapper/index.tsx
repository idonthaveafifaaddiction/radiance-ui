import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

type OffClickWrapperProps = {
  /**
   * Content/container that ignores clicks inside it
   */
  children: React.ReactNode;
  className?: string;
  /**
   * Function invoked when clicking outside of the children content
   */
  onOffClick: (event: KeyboardEvent | MouseEvent) => void;
};

export const OffClickWrapper = ({
  children,
  className,
  onOffClick,
}: OffClickWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onOffClick(event);
    }
  };

  const handleOffClick = (event: MouseEvent) => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    if (node.contains(event.target as Node)) {
      return;
    }

    onOffClick(event);
  };

  const addOffClickListener = () => {
    document.addEventListener('click', handleOffClick, false);
    document.addEventListener('keydown', handleKeyPress, false);
  };

  const removeOffClickListener = () => {
    document.removeEventListener('click', handleOffClick, false);
    document.removeEventListener('keydown', handleKeyPress, false);
  };

  useEffect(() => {
    addOffClickListener();
    return () => removeOffClickListener();
  });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

OffClickWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onOffClick: PropTypes.func.isRequired,
};
