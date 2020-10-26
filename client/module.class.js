import {Module} from '@owd-client/core';

export default class IframeModule extends Module {
  constructor(context) {
    super(context)
  }

  loadCommands({store}) {
    return {
      'iframe': function () {
        store.dispatch('core/windows/windowOpen', 'WindowSnake3D');
      },
    }
  }
}