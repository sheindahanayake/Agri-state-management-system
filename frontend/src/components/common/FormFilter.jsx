import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Building2, Home, Building } from 'lucide-react';

const TreeNode = ({ label, children, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = children && children.length > 0;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="ml-4">
      <div 
        className={`flex items-center py-2 px-2 cursor-pointer rounded-lg transition-all duration-200 
          ${isHovered ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {hasChildren && (
          <span className="mr-2">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-blue-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-blue-400" />
            )}
          </span>
        )}
        {!hasChildren && <span className="w-4 mr-2" />}
        {Icon && <Icon className="w-4 h-4 mr-2 text-gray-400" />}
        <span className={`text-gray-300 ${isHovered ? 'text-white' : ''}`}>{label}</span>
      </div>
      {isExpanded && children && (
        <div className="ml-2 border-l border-gray-700">
          {children.map((child, index) => (
            <TreeNode 
              key={index} 
              {...child} 
              icon={child.children ? null : Building2}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const PropertyTreeMenu = () => {
  const treeData = [
    {
      label: "Apartment",
      icon: Building,
      children: [
        { label: "General" },
        { label: "Flat" },
        { label: "Annex" },
        { label: "Suite" },
        { label: "Duplex" },
        { label: "Studio" },
        { label: "Penthouse" }
      ]
    },
    {
      label: "House",
      icon: Home,
      children: [
        { label: "General" },
        { label: "Unit House" },
        { label: "Bungalow" }
      ]
    },
    {
      label: "Commercial Property",
      icon: Building2,
      children: [
        { label: "Building (Isolate)" },
        { label: "Office space (Building)" },
        { label: "Warehouse" },
        { label: "Factory" },
        { label: "Shop Space" },
        { label: "Showroom/ Premises" },
        { label: "Mixed use" },
        { label: "Workshop/ Workplace" },
        { label: "Service/ filling station" },
        { label: "Hostel" },
        { label: "Cinema" }
      ]
    }
  ];

  return (
    <div className="w-72 bg-gray-900 rounded-xl shadow-xl p-6 border border-gray-800">
      <h2 className="text-xl font-semibold mb-6 text-white flex items-center">
        <Building2 className="w-5 h-5 mr-2 text-blue-400" />
        Property Types
      </h2>
      <div className="space-y-2">
        {treeData.map((node, index) => (
          <TreeNode key={index} {...node} />
        ))}
      </div>
    </div>
  );
};

export default PropertyTreeMenu;