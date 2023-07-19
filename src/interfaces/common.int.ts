export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  video_url: string;
  video_time: number;
  btn_text: string;
  description: string[];
  unlock: boolean;
  watched: boolean;
  videoId: string;
  img: string;
}
