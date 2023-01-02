export const fetchSeasons = async (league) => {
  const seasons = await fetch(`http://api-football-standings.azharimm.dev/leagues/${league}/seasons`);
  return seasons.json();
};

export const fetchTable = async (yearFilter, league) => {
  const response = await fetch(
    `http://api-football-standings.azharimm.dev/leagues/${league}/standings?season=${yearFilter.slice(0, 5)}&sort=asc`,
  );
  return response.json();
};
