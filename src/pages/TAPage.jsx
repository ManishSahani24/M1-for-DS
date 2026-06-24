import React from 'react';
import MaterialCard from '../components/MaterialCard';
import { taMaterials } from '../data';
import { Info } from 'lucide-react';

const TAPage = () => {
  return (
    <div className="main-container">
      <div className="page-header">
        <h1 className="page-title">Teaching Assistant Materials</h1>
        <p className="page-subtitle">Tutorial solutions, helpful links, and extra resources.</p>
      </div>

      <div className="edit-info-box">
        <Info size={20} className="flex-shrink-0" />
        <div>
          <strong>Are you a TA?</strong> To add or edit materials, update the <code>src/data.js</code> file in the code repository.
        </div>
      </div>

      <div className="materials-grid">
        {taMaterials.map((item) => (
          <MaterialCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TAPage;
