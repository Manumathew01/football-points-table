import React, { useState } from 'react';
import { useQuery } from 'react-query';
import TableHeader from './TableHeader.jsx';
import TableSkeleton from './TableSkeleton.jsx';

const TableContainer = () => {
  const [yearFilter, setYearFilter] = useState('2022 - 2023');
  const [league, setLeague] = useState('eng.1');

  const fetchSeasons = async (league) => {
    const seasons = await fetch(`http://api-football-standings.azharimm.dev/leagues/${league}/seasons`);
    return seasons.json();
  };

  const fetchTable = async (yearFilter, league) => {
    const response = await fetch(
      `http://api-football-standings.azharimm.dev/leagues/${league}/standings?season=${yearFilter.slice(
        0,
        5,
      )}&sort=asc`,
    );
    return response.json();
  };

  const { data: tableData, isLoading: isTableLoaded } = useQuery(
    ['yearTable', yearFilter, league],
    () => fetchTable(yearFilter, league),
    {
      refetchOnWindowFocus: false,
    },
  );

  const { data: yearData, isLoading: isYearLoaded } = useQuery(['seasons', league], () => fetchSeasons(league), {
    refetchOnWindowFocus: false,
  });

  const selectHandler = (event) => {
    setYearFilter(event.target.value);
  };

  // if (isTableLoaded || isYearLoaded) {
  //   return <TableSkeleton />;
  // }

  return (
    <div className="flex drop-shadow-xl p-10">
      <div className="h-6">
        {/* LEAGUE SELECTOR */}
        <select onChange={(e) => setLeague(e.target.value)} className="mb-20 select select-primary w-full max-w-2xl">
          <option value="none" selected disabled hidden>
            {tableData?.data?.name ? tableData?.data?.name : 'Choose league'}
          </option>
          <option value="eng.1">English Premier League</option>
          <option value="fra.1">Ligue 1</option>
          <option value="ger.1">Bundensliga 1</option>
          <option value="esp.1">La Liga</option>
          <option value="ita.1">Seria A</option>
        </select>

        {/* YEAR SELECTION */}
        <select onChange={selectHandler} className="select select-primary w-full max-w-lg">
          <option value="none" selected disabled hidden>
            {yearFilter ? yearFilter : 'Choose year'}
          </option>
          {yearData?.data?.seasons.map((season) => {
            return (
              <option value={`${season.year} - ${season.year + 1}`}>
                {season.year} - {season.year + 1}
              </option>
            );
          })}
        </select>
      </div>

      {isTableLoaded || isYearLoaded ? (
        <TableSkeleton className="mx-64" />
      ) : (
        <div className="mx-64 bg-gray-50 p-4">
          <TableHeader
            league={tableData?.data?.name ? tableData?.data?.name : ''}
            season={yearFilter ? yearFilter : '2022 - 2023'}
          />
          <div className="overflow-x-auto">
            <table className="table-auto">
              <thead className="border-b-2">
                <tr className="text-sm lg:text-lg font-bold text-purple-900 tracking-wider text-center ">
                  <th className="p-1 md:p-3 text-left">Club</th>
                  <th className="p-1 md:p-3">MP</th>
                  <th className="p-1 md:p-3">W</th>
                  <th className="p-1 md:p-3">D</th>
                  <th className="p-1 md:p-3">L</th>
                  <th className="p-1 md:p-3">GF</th>
                  <th className="p-1 md:p-3">GA</th>
                  <th className="p-1 md:p-3">GD</th>
                  <th className="p-1 md:p-3">Pts</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.data?.standings.map((team, key) => {
                  return (
                    <tr
                      className={`text-sm space-x-3 tracking-wider pt-2 border-b text-center ${
                        key === 16 ? 'border-red-600' : key === 3 ? 'border-green-600' : ' '
                      }`}
                    >
                      <td className="flex items-center p-2">
                        <div className="p-1">{key + 1}</div>
                        <div className="px-4">{team.team.name}</div>
                      </td>
                      <td className="p-2">{team.stats[0].displayValue}</td>
                      <td className="p-2">{team.stats[6].displayValue}</td>
                      <td className="p-2">{team.stats[5].displayValue}</td>
                      <td className="p-2">{team.stats[1].displayValue}</td>
                      <td className="p-2">{team.stats[4].displayValue}</td>
                      <td className="p-2">{team.stats[3].displayValue}</td>
                      <td
                        className={`p-2 ${
                          team.stats[8].displayValue.startsWith('+')
                            ? 'text-green-500'
                            : team.stats[8].displayValue === '0'
                            ? 'text-gray-700'
                            : 'text-red-500'
                        }`}
                      >
                        {team.stats[8].displayValue}
                      </td>
                      <td className="p-2">{team.stats[2].displayValue}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableContainer;
