import {
    HeaderComponent,
    HeaderComponent2,
    AdvancedComponent,
    InternalBinding,
} from "poc-wc";

export class WebComponents {
    private _greeting = "Hello!";
    public get greeting(): string {
        return this._greeting;
    }
    public set greeting(v: string) {
        this._greeting = v;
    }

    color = 'purple';

    mode = 'good';

    public button1Click() {
        this._greeting = "Hello World!";
        this.mode = 'Hello World!';
    }

    public button2Click() {
        this._greeting = "Hello Space!";
        this.mode = 'Hello Space!';
    }

    public button3Click() {
        this.color === 'purple' ? this.color = 'hotpink' : this.color = 'purple';
    }

    public button4Click() {
      this.mode = 'Dusk 🌆';
    }
  
    public button5Click() {
      this.mode = 'Dawn 🌅';
    }
}
