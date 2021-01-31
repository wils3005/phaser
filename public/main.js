import Peer from "peerjs";
import Phaser from "phaser";
const { constructor: { name }, location: { pathname }, } = globalThis;
const peer = new Peer();
class Scene extends Phaser.Scene {
    constructor() {
        super("@wilsjs/phaser");
    }
    preload() {
    }
    create() {
    }
}
const game = new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: "#125555",
    width: 800,
    height: 600,
    scene: Scene,
});
function log(error) {
    var _a;
    const { stack } = new Error();
    const a = (stack === null || stack === void 0 ? void 0 : stack.split("\n")) || [];
    const s = a[1];
    const message = {
        globalThis: name,
        location: pathname,
        function: String((_a = /at (.+) /.exec(s)) === null || _a === void 0 ? void 0 : _a.pop()),
    };
    error ? console.error(Object.assign(Object.assign({}, message), { error })) : console.info(message);
}
function onWindowLoad() {
    log();
}
globalThis.addEventListener("load", onWindowLoad);
export { game, peer };
//# sourceMappingURL=main.js.map