import {
  IContainer,
  IAttrMapper,
  AppTask,
  NodeObserverLocator,
  Aurelia,
} from "aurelia";
import { RouterConfiguration } from "@aurelia/router";
import { MyApp } from "./my-app";
import { HeaderComponent, HeaderComponent2, AdvancedComponent } from "poc-wc";

Aurelia.register(RouterConfiguration)
  .register(HeaderComponent)
  .register(HeaderComponent2)
  .register(AdvancedComponent)
  .register(
    AppTask.creating(IContainer, (container) => {
      const attrMapper = container.get(IAttrMapper);
      const nodeObserverLocator = container.get(NodeObserverLocator);
      attrMapper.useTwoWay((el, property) => {
        switch (el.tagName) {
          case "header-component2":
            return property === "color";
        }
      });
      nodeObserverLocator.useConfig({
        "header-component2": {
          value: { events: ["change"] },
        },
      });
    })
  )

  .app(MyApp)
  .start();
