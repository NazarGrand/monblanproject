import React, { useMemo, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { getPosts } from '../../services/postsService';
import { PostFeed } from '../PostFeed/PostFeed';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import { ViewToolbar } from '../ViewToolbar/ViewToolbar';
import './App.css';

export function App() {
  const [view, setView] = useState('rows');
  const [startDate, setStartDate] = useState(new Date(2026, 5, 1));
  const [endDate, setEndDate] = useState(new Date(2026, 5, 2));
  const [openCalendar, setOpenCalendar] = useState(null);

  const visiblePosts = useMemo(() => getPosts({ from: startDate, to: endDate }), [startDate, endDate]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (date && endDate && date > endDate) {
      setEndDate(date);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    if (date && startDate && date < startDate) {
      setStartDate(date);
    }
  };

  return (
    <main className="page-shell">
      <div className="art art-left" />
      <div className="art art-right" />

      <section className="profile" aria-label="Monblanproject profile">
        <ProfileHeader
          startDate={startDate}
          endDate={endDate}
          openCalendar={openCalendar}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
          onCalendarOpen={setOpenCalendar}
          onCalendarClose={() => setOpenCalendar(null)}
        />
        <ViewToolbar view={view} onViewChange={setView} />
        <PostFeed posts={visiblePosts} view={view} />
        {visiblePosts.length > 0 && <button className="load-more">LOAD MORE</button>}
      </section>
    </main>
  );
}
