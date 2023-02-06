export default function stringToUTF8Bytes(string) {
  return new TextEncoder().encode(string);
}
