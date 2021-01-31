import * as z from "zod";
import Peer from "peerjs";
import log from "./log";

const peer = new Peer();

const dataConnection = peer.connect("another-peers-id");

function onDataConnectionData() {
  log();
}

function onDataConnectionOpen() {
  log();
}

function onDataConnectionClose() {
  log();
}

function onDataConnectionError() {
  log();
}

// function peerOnCall(mediaConnection: Peer.MediaConnection): void {
//   const { mediaDevices } = navigator;

//   void mediaDevices.getUserMedia({ video: true, audio: true });
// }

function onStream(mediaStream: MediaStream) {
  log();

  const element = z
    .instanceof(HTMLVideoElement)
    .parse(document.querySelector("video#player1"));

  element.srcObject = mediaStream;
}

dataConnection.on("data", onDataConnectionData);
dataConnection.on("open", onDataConnectionOpen);
dataConnection.on("close", onDataConnectionClose);
dataConnection.on("error", onDataConnectionError);

globalThis.navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then(onStream)
  .catch(log);

// answer
// peer.on("call", peerOnCall);

export {};
