export default function bytesToHex(bytes:any|unknown) {
    return Array.from(
      bytes,
      //@ts-ignore
      byte => byte.toString(16).padStart(2, "0")
    ).join("");
}
