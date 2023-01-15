import {
  IContainer,
  IAttrMapper,
  AppTask,
  NodeObserverLocator,
  Aurelia,
} from "aurelia";
import { RouterConfiguration } from "@aurelia/router";
import { MyApp } from "./my-app";
import {
  HeaderComponent,
  HeaderComponent2,
  AdvancedComponent,
  InternalBinding,
  CounterComponent
} from "poc-wc";

Aurelia.register(RouterConfiguration)
  .register(HeaderComponent, HeaderComponent2, AdvancedComponent, InternalBinding)
  .register(CounterComponent)
  .app(MyApp)
  .start();
