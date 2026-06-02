import React from 'react';
import { DateField } from '../DateField/DateField';
import logo from '../../assets/logo.png';
import './ProfileHeader.css';

export function ProfileHeader({
  startDate,
  endDate,
  openCalendar,
  onStartDateChange,
  onEndDateChange,
  onCalendarOpen,
  onCalendarClose
}) {
  return (
    <header className="profile-header">
      <img className="profile-logo" src={logo} alt="monblanproject logo" />

      <div className="profile-info">
        <div className="title-line">
          <h1>monblanproject</h1>
          <a href="https://www.instagram.com/monblanproject/" target="_blank" rel="noreferrer">
            Start on 17-02-2016
          </a>
        </div>

        <dl className="stats" aria-label="Project statistics">
          <div><dt>870</dt><dd>posts</dd></div>
          <div><dt>11,787</dt><dd>followers</dd></div>
          <div><dt>112</dt><dd>following</dd></div>
        </dl>

        <div className="filters" aria-label="Date filters">
          <span className="filter-label">Date</span>
          <DateField
            label="from"
            selected={startDate}
            onChange={onStartDateChange}
            isOpen={openCalendar === 'from'}
            onOpen={() => onCalendarOpen('from')}
            onClose={onCalendarClose}
          />
          <DateField
            label="to"
            selected={endDate}
            onChange={onEndDateChange}
            isOpen={openCalendar === 'to'}
            onOpen={() => onCalendarOpen('to')}
            onClose={onCalendarClose}
          />
        </div>
      </div>
    </header>
  );
}
