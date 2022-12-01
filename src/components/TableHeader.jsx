import React from 'react';
import { ReactComponent as PremierSvg } from '../assets/Premier.svg';

const TableHeader = ({ league, season }) => {
  return (
    <div className="border-b-2 pb-4">
      <div className="flex shrink items-center">
        <PremierSvg />
        <div className="pl-2">
          <p className="text-lg text-purple-900 font-medium">{league}</p>
          <p className="text-sm  text-purple-400">{`Season ${season}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
