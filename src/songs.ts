export interface Song {
  title: string;
  artist: string;
  audioUrl: string;
  emoji: string;
  albumArt?: string;
}

export const SONGS: Song[] = [
  { 
    title: 'Choo Kar Mere Manko', 
    artist: 'Kishore Kumar', 
    audioUrl: '/songs/Choo_kar.mp3', 
    emoji: '🎙️' 
  },
  { 
    title: 'Yeh Dosti Hum Nahi Todenge', 
    artist: 'Kishore Kumar, Manna Dey', 
    audioUrl: '/songs/Yeh_Dosti.mp3', 
    emoji: '🤝' 
  },
  { 
    title: 'Mere Mehboob Qayamat Hogi', 
    artist: 'Kishore Kumar', 
    audioUrl: '/songs/Mere_Mehboob.mp3', 
    emoji: '💔' 
  }
];
