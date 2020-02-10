export namespace Utils {
  export function toBinary(integer: number, withPaddingLength: number) {
    let str = integer.toString(2);
    return str.padStart(withPaddingLength, "0");
  }

  export function toNumber(str: string): number {
    return parseInt(str, 2);
  }

  export function isBinary(str: string) {
    return /^[01]+$/.test(str);
  }
}
