export class DataService{
  private data: Array<string> = ["../assets/Angular2.png", "../assets/github.png", "../assets/webpack.png"];

  getData() {
    return this.data;
  }
}
