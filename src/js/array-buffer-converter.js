export default class ArrayBufferConverter {
  #buffer;

  load(buffer) {
    this.#buffer = buffer;
  }

  toString() {
    const result = new Uint8Array(this.#buffer).reduce((str, byte) => {
      if (byte) {
        str += String.fromCharCode(byte);
      }
      return str;
    }, '');
    return result;
  }
}
