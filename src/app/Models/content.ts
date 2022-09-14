export interface Content {
  id:number,
  title: string,
  lecture: {
    id?:number,
    title: String,
    time: string
  }[];
}
