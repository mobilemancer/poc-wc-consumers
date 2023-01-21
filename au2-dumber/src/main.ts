import {
  IContainer,
  IAttrMapper,
  AppTask,
  Aurelia,
} from "aurelia";

import { NodeObserverLocator } from '@aurelia/runtime-html';
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
  .register(AppTask.creating(IContainer, container => {
    const attrMapper = container.get(IAttrMapper);
    const nodeObserverLocator = container.get(NodeObserverLocator);
    attrMapper.useTwoWay((el, property) => {
      switch (el.tagName) {
        case 'INTERNAL-BINDING': return property === 'value';
      }
    });
    nodeObserverLocator.useConfig({
      'INTERNAL-BINDING': {
        value: { events: ['change'] }
      }
    });
  }))
  .app(MyApp)
  .start();
