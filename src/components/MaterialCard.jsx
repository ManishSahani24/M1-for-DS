import React from 'react';
import { FileText, Video, Link as LinkIcon, Download } from 'lucide-react';

const MaterialCard = ({ item }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'pdf':
        return <FileText size={24} />;
      case 'video':
        return <Video size={24} />;
      case 'link':
      default:
        return <LinkIcon size={24} />;
    }
  };

  const getButtonText = () => {
    switch (item.type) {
      case 'pdf': return 'Download PDF';
      case 'video': return 'Watch Video';
      case 'link': return 'Open Link';
      default: return 'Open';
    }
  };

  return (
    <div className="material-card">
      <div className="card-header">
        <div className={`card-icon ${item.type}`}>
          {getIcon()}
        </div>
        <h3 className="card-title">{item.title}</h3>
      </div>
      <p className="card-description">{item.description}</p>
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="card-button">
        {item.type === 'pdf' ? <Download size={18} /> : <LinkIcon size={18} />}
        {getButtonText()}
      </a>
    </div>
  );
};

export default MaterialCard;
