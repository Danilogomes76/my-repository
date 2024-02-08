import { ISourceOptions } from "@tsparticles/engine";

const isBrowser = typeof window !== "undefined";
const isMobile = isBrowser && window.innerWidth < 1020 ? true : false;

const preloadImages = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    name: "git",
    width: 32,
    height: 32,
  },
  {
    src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    name: "react",
    width: 32,
    height: 32,
  },
  {
    src: "https://miro.medium.com/v2/resize:fit:480/1*Iohnw2aOQ5EBghVoqKA7VA.png",
    name: "styled",
    width: 32,
    height: 32,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    name: "ts",
    width: 32,
    height: 32,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "js",
    width: 32,
    height: 32,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/2048px-Electron_Software_Framework_Logo.svg.png",
    name: "electron",
    width: 32,
    height: 32,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
    name: "tailwind",
    width: 32,
    height: 32,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
    name: "figma",
    width: 32,
    height: 32,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    name: "html",
    width: 32,
    height: 32,
  },
];

const options: ISourceOptions = {
  name: "Among Us",
  particles: {
    groups: {
      z5000: {
        number: {
          value: 70,
        },
        zIndex: {
          value: 50,
        },
      },
      z7500: {
        number: {
          value: 30,
        },
        zIndex: {
          value: 75,
        },
      },
      z2500: {
        number: {
          value: 50,
        },
        zIndex: {
          value: 25,
        },
      },
      z1000: {
        number: {
          value: 40,
        },
        zIndex: {
          value: 10,
        },
      },
    },
    number: {
      value: isMobile ? 100 : 200,
    },
    color: {
      value: "#000000",
      animation: {
        enable: false,
        speed: 20,
        sync: true,
      },
    },

    shape: {
      options: {
        image: preloadImages.map((image) => ({ name: image.name })),
      },
      type: "image",
    },

    opacity: {
      value: 1,
    },
    size: {
      value: 16,
    },
    move: {
      angle: {
        value: 10,
        offset: 0,
      },
      enable: true,
      speed: 2,
      direction: "right",
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5,
    },
  },
  background: {
    color: "#ABB2BF",
  },
  emitters: {
    position: {
      y: 55,
      x: -5,
    },
    rate: {
      delay: 7,
      quantity: 1,
    },
    size: {
      width: 0,
      height: 0,
    },
  },
  preload: preloadImages,
  fullScreen: false,
};

export { options };
