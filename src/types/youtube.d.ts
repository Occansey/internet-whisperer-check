
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  setLoop(loopPlaylists: boolean): void;
}

interface YTPlayerEvent {
  target: YTPlayer;
}

interface YTPlayerOptions {
  playerVars?: {
    autoplay?: number;
    controls?: number;
    rel?: number;
    showinfo?: number;
    mute?: number;
    loop?: number;
    playlist?: string;
  };
  events?: {
    onReady?: (event: YTPlayerEvent) => void;
    onStateChange?: (event: any) => void;
  };
}

interface YT {
  Player: new (
    element: HTMLIFrameElement | string,
    options: YTPlayerOptions
  ) => YTPlayer;
}

declare global {
  interface Window {
    YT: YT;
    onYouTubeIframeAPIReady?: () => void;
  }
}
