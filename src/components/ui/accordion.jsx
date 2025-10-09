import React, { useState, createContext, useContext } from 'react';

const AccordionContext = createContext();

const Accordion = ({ children, type = "single", collapsible = false, className = "", ...props }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (value) => {
    if (type === "single") {
      if (collapsible && openItems.has(value)) {
        setOpenItems(new Set());
      } else {
        setOpenItems(new Set([value]));
      }
    } else {
      const newOpenItems = new Set(openItems);
      if (newOpenItems.has(value)) {
        newOpenItems.delete(value);
      } else {
        newOpenItems.add(value);
      }
      setOpenItems(newOpenItems);
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={`accordion ${className}`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children, value, className = "", ...props }) => {
  return (
    <div className={`accordion-item ${className}`} data-value={value} {...props}>
      {children}
    </div>
  );
};

const AccordionTrigger = ({ children, className = "", ...props }) => {
  const { openItems, toggleItem } = useContext(AccordionContext);
  const value = props.value || props.children?.props?.value || 
    document.querySelector('[data-value]')?.getAttribute('data-value');

  const isOpen = openItems.has(value);

  return (
    <button
      className={`accordion-trigger w-full text-left py-3 px-0 border-none bg-transparent cursor-pointer flex justify-between items-center ${className}`}
      onClick={() => toggleItem(value)}
      {...props}
    >
      <span>{children}</span>
      <svg
        className={`accordion-chevron w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <polyline points="6,9 12,15 18,9"></polyline>
      </svg>
    </button>
  );
};

const AccordionContent = ({ children, className = "", ...props }) => {
  const { openItems } = useContext(AccordionContext);
  const accordionItem = document.querySelector('[data-value]');
  const value = accordionItem?.getAttribute('data-value');
  const isOpen = openItems.has(value);

  return (
    <div
      className={`accordion-content overflow-hidden transition-all duration-200 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } ${className}`}
      {...props}
    >
      <div className="pb-4">
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };