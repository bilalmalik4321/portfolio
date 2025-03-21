import React from 'react';

interface CompanyLogoProps {
  company: string;
  className?: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ company, className }) => {
  const logos: { [key: string]: string } = {
    'Zafin': `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>`,
    'Palantir': `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 4h8v16H8V4zm2 2v12h4V6h-4z"/>
    </svg>`,
    'Zynga': `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>`,
    'IBM': `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M8 7h8v10H8z"/>
    </svg>`,
    'WSIB': `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
      <path d="M12 6v12M8 12h8"/>
    </svg>`
  };

  return (
    <div 
      className={`company-logo ${className || ''}`}
      dangerouslySetInnerHTML={{ __html: logos[company] || '' }}
    />
  );
};

export default CompanyLogo; 