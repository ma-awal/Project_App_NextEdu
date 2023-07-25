import React from 'react';
import PropCard from '../../components/PropCard/PropCard';
import '../../data/EventData';
import EventCard from '../../components/EventCard/EventCard';
import EventData from '../../data/EventData';
const Event = () => {
  return (
    <main>
      <PropCard name={'Event'} link={'Home'} />
      <section className="Event py-3 py-md-4  py-lg-5">
        <EventCard data={EventData} />
      </section>
    </main>
  );
};

export default Event;
