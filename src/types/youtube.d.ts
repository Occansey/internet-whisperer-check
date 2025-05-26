
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  setLoop(loopPlaylists: boolean): void;
  getCurrentTime(): number;
  seekTo(seconds: number): void;
  destroy(): void;
}

interface YTPlayerEvent {
  target: YTPlayer;
  data: number;
}

interface YTPlayerOptions {
  videoId: string;
  playerVars?: {
    autoplay?: number;
    controls?: number;
    rel?: number;
    showinfo?: number;
    mute?: number;
    loop?: number;
    playlist?: string;
    modestbranding?: number;
    playsinline?: number;
    start?: number;
  };
  events?: {
    onReady?: (event: YTPlayerEvent) => void;
    onStateChange?: (event: YTPlayerEvent) => void;
  };
}

interface YT {
  Player: new (
    element: HTMLElement | string,
    options: YTPlayerOptions
  ) => YTPlayer;
  PlayerState: {
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    ENDED: number;
  };
}

declare global {
  interface Window {
    YT?: YT;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export {};
