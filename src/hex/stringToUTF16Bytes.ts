//https://stackoverflow.com/a/57391629
export default function stringToUTF16Bytes(string, littleEndian) {
  const bytes = new Uint8Array(string.length * 2);
  // Using DataView is the only way to get a specific
  // endianness.
  const view = new DataView(bytes.buffer);
  for (let i = 0; i != string.length; i++) {
    view.setUint16(i, string.charCodeAt(i), littleEndian);
  }
  return bytes;
}
