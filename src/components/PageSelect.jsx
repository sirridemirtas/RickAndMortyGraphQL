import React from 'react';

export function PageSelect({ page, totalPages, onPageChange }) {
  return (
    <select 
      className="page-select"
      value={page}
      onChange={(e) => onPageChange(Number(e.target.value))}
    >
      {[...Array(totalPages)].map((_, index) => (
        <option key={index + 1} value={index + 1}>
          Page {index + 1}
        </option>
      ))}
    </select>
  );
}