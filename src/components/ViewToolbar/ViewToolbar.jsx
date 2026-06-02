import React from 'react';
import { Grid2X2, List } from 'lucide-react';
import './ViewToolbar.css';

export function ViewToolbar({ view, onViewChange }) {
  return (
    <div className='view-toolbar'>
      <div className='view-switch' aria-label='View mode'>
        <button
          className={view === 'rows' ? 'active' : ''}
          onClick={() => onViewChange('rows')}
          aria-label='Rows view'
        >
          <List size={26} strokeWidth={2.1} />
        </button>
        <button
          className={view === 'tiles' ? 'active' : ''}
          onClick={() => onViewChange('tiles')}
          aria-label='Tiles view'
        >
          <Grid2X2 size={26} strokeWidth={2.1} />
        </button>
      </div>
    </div>
  );
}
