export class WebComponents {
  private _greeting: string = "Hello!";
  public get greeting(): string {
    return this._greeting;
  }
  public set greeting(v: string) {
    this._greeting = v;
  }

  constructor() {}

  public button1Click() {
    this._greeting = "Hello World!";
  }

  public button2Click() {
    this._greeting = "Hello Space!";
  }
}
