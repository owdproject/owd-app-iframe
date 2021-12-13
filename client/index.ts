import {ModuleApp} from "@owd-client/core/index";
import {OwdModuleAppSetupCommandsContext} from "@owd-client/types";

// window components
import WindowSnake3D from "./windows/WindowSnake3D.vue";

export default class IframeModule extends ModuleApp {
  setup() {
    return {
      name: "iframe",
      singleton: true,
      windows: [
        {
          component: WindowSnake3D,
          name: "WindowSnake3D",
          title: "Web Plays Snake",
          category: "projects",
          icon: {
            name: "mdi mdi-snake"
          },
          color: "#37a5c4",
          externalUrl: "https://hacklover-snake-client.netlify.app",
          resizable: false,
          maximizable: true,
          size: {
            width: 728,
            height: 510
          },
          position: {
            x: -1,
            y: 0,
            z: 0
          },
          theme: {
            noContentSpacing: true,
          },
          metaData: {
            iframe: {
              src: "https://hacklover-snake-client.netlify.app/?host=https://hacklover-snake-server.herokuapp.com"
            }
          }
        }
      ]
    }
  }

  setupCommands({store}: OwdModuleAppSetupCommandsContext) {
    return {
      'iframe': function () {
        store.dispatch('core/window/windowOpen', 'WindowSnake3D');
      },
    }
  }
}