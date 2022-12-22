import Aurelia from "aurelia";
import { RouterConfiguration } from "@aurelia/router";
import { MyApp } from "./my-app";
import HeaderComponent from "poc-wc";

Aurelia.register(RouterConfiguration)
  .register(HeaderComponent)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
