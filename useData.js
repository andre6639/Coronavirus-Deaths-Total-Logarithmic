import React, { useState, useEffect } from 'react';
import { csv, timeParse } from 'd3';
const csvUrl =
  'https://gist.githubusercontent.com/andre6639/10ea6e646b7dd4aa94433672c5557375/raw/7ff95fb128b732b87ac9a1859fc20556fe506d15/GGT_Ridership_Simple.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Ridership = +d.Ridership;
      d.Date = new Date(d.Date);
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
