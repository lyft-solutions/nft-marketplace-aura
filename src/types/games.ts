export interface GameModePanelProps {
  gameMode: string;
  ranked: boolean;
  solo: boolean;
  onRankedChange: () => void;
  onSoloChange: () => void;
}

export interface BottomNavProps {
  level: number;
}

export interface CharacterDisplayProps {
  username: string;
}
