export interface Instructor {
  id: string;
  fullName: string,
  img:string,
  skill?: string;
  rate?: number;
  studentsCount?: number;
  coursesCount?: number;
  reviewsCount?: number;
  bio?: string;
}
