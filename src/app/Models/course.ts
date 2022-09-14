import { Content } from './content';
import { FAQ } from './FAQ';
import { Instructor } from "./Instructor";

export interface Course {
  id: string;
  title: string;
  time: string;
  level: string;
  rate: string;
  voteCount: number;
  img: string;
  instructor: Instructor;
  faq?: FAQ[];
  content?: Content[];
  shortDescription?: string;
  enrolledCount?: number;
  price?: number;
  offPrice?: number;
}
