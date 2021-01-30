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
new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: "#125555",
    width: 800,
    height: 600,
    parent: "main",
    scene: Scene,
});
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
export {};
//# sourceMappingURL=main.js.map