import React from 'react';
import MaterialCard from '../components/MaterialCard';
import { instructorMaterials } from '../data';
import { Info } from 'lucide-react';

const InstructorPage = () => {
  return (
    <div className="main-container">
      <div className="page-header">
        <h1 className="page-title">Instructor Materials</h1>
        <p className="page-subtitle">Official course materials, lectures, and syllabus.</p>
      </div>

      <div className="edit-info-box">
        <Info size={20} className="flex-shrink-0" />
        <div>
          <strong>Are you the Instructor?</strong> To add or edit materials, update the <code>src/data.js</code> file in the code repository.
        </div>
      </div>

      <div className="materials-grid">
        {instructorMaterials.map((item) => (
          <MaterialCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;
