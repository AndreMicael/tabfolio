import React, { useCallback, useState } from "react";
import "./Tabs.scss";

export const Tabs = ({ children }) => {
  // initial tab
  const initialTab = children[0].props.label;

  // set the tabs
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  // creating tabs
  const tabs = children.map((child) => {
    return (
      <button
        key={child.props.label}
        className={`${activeTab === child.props.label ? "active button-container" : "deactive button-container"}`}
        onClick={(e) => {
          e.preventDefault();
          handleActiveTab(child.props.label);
        }}
      >
        {child.props.tabName}
      </button>
    );
  });

  const tabContent = children.filter(
    (child) => child.props.label === activeTab
  );

  // finally lets return tabs and tabcontents
  return (
    <div className="tabs-container">
      <div className="tabs">{tabs}</div>
      <div className="tab_content">{tabContent}</div>
    </div>
  );
};

// lets create a single tab component
export const Tab = ({ children }) => {
  return <>{children}</>;
};
