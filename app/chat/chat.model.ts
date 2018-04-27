export class Chat {
  room: string;
  message: string;
  updated_at: string;

  constructor(
    public room?: string,
    public message?: string,
    public updated_at?: date
  ) {
    this.room = room;
    this.message = message;
    this.updated_at;
  }
}
