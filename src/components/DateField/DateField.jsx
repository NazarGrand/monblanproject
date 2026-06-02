import React from 'react';
import DatePicker from 'react-datepicker';
import { CalendarDays, X } from 'lucide-react';
import './DateField.css';

export function DateField({ label, selected, onChange, isOpen, onOpen, onClose }) {
  const handleClear = (event) => {
    event.stopPropagation();
    onChange(null);
    onClose();
  };

  return (
    <div className={`date-field${isOpen ? ' open' : ''}`}>
      <span>{label}</span>
      <DatePicker
        selected={selected}
        onChange={(date) => {
          onChange(date);
          onClose();
        }}
        dateFormat='dd_MM_yyyy'
        calendarStartDay={0}
        customInput={<DateInput onOpen={onOpen} />}
        open={isOpen}
        openToDate={selected || new Date(2026, 5, 2)}
        onInputClick={onOpen}
        onClickOutside={onClose}
        popperPlacement='bottom-start'
      />
      <button
        className='clear-date'
        onClick={handleClear}
        aria-label={`Clear ${label} date`}
      >
        <X size={9} />
      </button>
      {!isOpen && (
        <button className='date-icon-container' onClick={onOpen} type='button' aria-label={`Open ${label} calendar`}>
          <CalendarDays className='date-icon' size={12} aria-hidden='true' />
        </button>
      )}
    </div>
  );
}

const DateInput = React.forwardRef(function DateInput({ value, onClick, onOpen }, ref) {
  const handleClick = (event) => {
    onOpen();
    onClick?.(event);
  };

  return (
    <button className='date-input' onClick={handleClick} ref={ref} type='button'>
      {value || ''}
    </button>
  );
});
