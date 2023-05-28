import React from 'react';
import { LineGraph } from '../components/charts/LineGraph';
import { Map } from '../components/charts/Map';

export const ChartsAndMaps: React.FC = () => {
  return (
    <div>
      <h2>Charts and Maps</h2>
      <LineGraph />
      <Map />
    </div>
  );
};

