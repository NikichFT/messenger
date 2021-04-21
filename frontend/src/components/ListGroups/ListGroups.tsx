import React from 'react';
import Group from '../Group/Group';
import './ListGroups.scss';

function ListGroups() {
  return (
    <section className="list-groups list-groups_opened">
      <ul className="list-groups__container">
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
      </ul>
      <button type="button" className="list-groups__add-button"></button>
    </section>
  );
}

export default ListGroups;
