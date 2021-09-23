export class NotificationItem {
  constructor(type, title, message = "") {
    this.id = new Date().getTime();
    this.date = new Date();
    this.type = type;
    this.title = title;
    this.message = message;
    this.displayedDate = this.getDate();
    this.isHidden = false;
    this.isViewed = false;
  }

  getDate() {
    const timestamp = new Date();
    return `${timestamp.getHours()}:${timestamp.getMinutes()}`;
  }
}
