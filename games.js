export const GAMES = [
  {
    id: 'dominoes',
    name: 'Little Dominoes',
    shortName: 'Dominoes',
    description: 'Match the dots, plan your ends and race to 50 points.',
    badge: '1–2 players · online',
    icon: 'dominoes',
    accent: '#3d8f6f',
    enabled: true,
    modes: [
      { id: 'single', name: 'Play the computer', description: 'One player, with adjustable difficulty', icon: '🤖' },
      { id: 'two', name: 'Two players', description: 'Pass this device between players', icon: '👥' },
      { id: 'online', name: 'Online game', description: 'Create a live room or join with a code', icon: '🌐' }
    ]
  }
];

export function getGame(id) {
  return GAMES.find(game => game.id === id) || null;
}
