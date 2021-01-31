import Peer from "peerjs";

const {
  constructor: { name },
  location: { pathname },
} = globalThis;

const peer = new Peer();

class Scene extends Phaser.Scene {
  constructor() {
    super("@wilsjs/phaser");
  }

  preload(): void {
    // TODO
  }

  create(): void {
    // TODO
  }
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 600,
  scene: Scene,
});

function log(error?: Error): void {
  const { stack } = new Error();
  const a = stack?.split("\n") || [];
  const s = a[1];

  const message = {
    globalThis: name,
    location: pathname,
    function: String(/at (.+) /.exec(s)?.pop()),
  };

  error ? console.error({ ...message, error }) : console.info(message);
}

function onWindowLoad(): void {
  log();
}

globalThis.addEventListener("load", onWindowLoad);

export { game, peer };
