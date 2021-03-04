import {ModuleApp} from '@owd-client/core';

export default class IframeModule extends ModuleApp {
  constructor(context) {
    super(context)
  }

  loadCommands({store}) {
    return {
      'iframe': function () {
        store.dispatch('core/window/windowOpen', 'WindowSnake3D');
      },
    }
  }
}