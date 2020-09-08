/*
 * Extra typings definitions
 */

// Allow .json files imports
declare module '*.json';

// SystemJS module definition
declare var console: Console;

interface Activity {
  id: string;
  video_url: string;
  name: string;
  description: string;
  duration: string;
  created_by: string;
  image: string;
  thumbnail: string;
  cropped: string;
  file_name_original: string;
  popularity: string;
  category_id: string;
  category: string;
  keywords: string;
}
