export default function stringToUTF32Bytes(string, littleEndian) {
    const codepoints = Array.from(string, c => c.codePointAt(0));
    const bytes = new Uint8Array(codepoints.length * 4);
    // Using DataView is the only way to get a specific
    // endianness.
    const view = new DataView(bytes.buffer);
    for (let i = 0; i != codepoints.length; i++) {
        view.setUint32(i, codepoints[i], littleEndian);
    }
    return bytes;
}
