import "phaser";
const { constructor: { name }, location: { pathname }, } = globalThis;
class Scene extends Phaser.Scene {
    constructor() {
        super("@wilsjs/phaser");
    }
    preload() {
    }
    create() {
    }
}
const config = {
    type: Phaser.AUTO,
    backgroundColor: "#125555",
    width: 800,
    height: 600,
    parent: "main",
    scene: Scene,
};
new Phaser.Game(config);
function log(error) {
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
function onWindowLoad() {
    log();
}
globalThis.addEventListener("load", onWindowLoad);
//# sourceMappingURL=main.js.map