export class WebComponents {
  private _greeting = "Hello!";
  public get greeting(): string {
    return this._greeting;
  }
  public set greeting(v: string) {
    this._greeting = v;
  }

  color = 'purple';

  constructor() { }

  public button1Click() {
    this._greeting = "Hello World!";
  }

  public button2Click() {
    this._greeting = "Hello Space!";
  }

  public button3Click() {
    this.color === 'purple' ? this.color = 'hotpink' : this.color = 'purple';
  }
}
