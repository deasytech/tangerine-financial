"use client"

import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

interface Tab {
  key: string;
  label: string;
  content: {
    location: React.ReactNode,
    address: React.ReactNode,
  };
}

const tabs: Tab[] = [
  {
    key: 'general', label: 'Tangerine General', content: {
      location: <div className="w-full tab">
        <h3 className="tab-title">Location</h3>
        <p>Lagos Head office - Yaba</p>
        <p>Osogbo</p>
        <p>Retail Business OUTLET KANO</p>
      </div>,
      address: <div className="w-full tab">
        <h3 className="tab-title">Address</h3>
        <p>14, Hughes Avenue, Alagomeji, Yaba, Lagos</p>
        <p>2nd Floor, Jesus Court, Jesus Court, Isiaka Adeleke Freeway, Okefia, Oshogbo, Osun state.</p>
        <p>Skye Bank Plc, 23, Bello Road, Kano, Kano state</p>
      </div>
    }
  },
  {
    key: 'life', label: 'Tangerine Life', content: {
      location: <div className="w-full">
        <h3 className="tab-title">Location</h3>
      </div>,
      address: <div className="w-full">
        <h3 className="tab-title">Address</h3>
      </div>
    }
  },
  {
    key: 'pensions', label: 'Tangerine Pensions', content: {
      location: <div className="w-full">
        <h3 className="tab-title">Location</h3>
      </div>,
      address: <div className="w-full">
        <h3 className="tab-title">Address</h3>
      </div>
    }
  },
  {
    key: 'health', label: 'Tangerine Health', content: {
      location: <div className="w-full">
        <h3 className="tab-title">Location</h3>
      </div>,
      address: <div className="w-full">
        <h3 className="tab-title">Address</h3>
      </div>
    }
  },
];

const ContactTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].key);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="max-container w-full">
      <div className="flex gap-10">
        <div className='flex items-center gap-2'>
          <p className='regular-18 text-generic-950'>Select a business</p>
          <ArrowRight size={16} className='text-generic-950' />
        </div>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`py-2 px-4 transition-all ${activeTab === tab.key
              ? 'rounded-full bg-blue-950 text-white hover:bg-orange-base'
              : 'border rounded-full border-blue-950 text-blue-950 hover:border-orange-base hover:text-orange-base'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab) =>
          activeTab === tab.key ? (
            <div key={tab.key} className="tab-content flex mt-8">
              {tab.content.location}
              {tab.content.address}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ContactTabs;
