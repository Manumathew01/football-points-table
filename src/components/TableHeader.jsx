import React, { useContext } from 'react';
import { ReactComponent as PremierSvg } from '../assets/Premier.svg';
import { ReactComponent as LaLigaSvg } from '../assets/LaLiga.svg';
import { ReactComponent as SerieASvg } from '../assets/SerieA.svg';
import { ReactComponent as Ligue1Svg } from '../assets/Ligue1.svg';
import { ReactComponent as BundesligaSvg } from '../assets/Bundesliga.svg';
import TableContext from '../providers/TableContext';

const TableHeader = ({ league }) => {
  const { league: leagueId, yearFilter: season } = useContext(TableContext);

  return (
    <div className="border-b-2 pb-4">
      <div className="flex shrink items-center">
        {leagueId === 'eng.1' ? (
          <PremierSvg />
        ) : leagueId === 'esp.1' ? (
          <LaLigaSvg />
        ) : leagueId === 'ita.1' ? (
          <SerieASvg />
        ) : leagueId === 'fra.1' ? (
          <Ligue1Svg />
        ) : (
          <BundesligaSvg />
        )}
        <div className="pl-2">
          <p className="text-lg text-purple-900 font-medium">{league}</p>
          <p className="text-sm  text-purple-400">{`Season ${season}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
