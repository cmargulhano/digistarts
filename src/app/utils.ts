export namespace Utils {
  export function toBinary(integer: number, withPaddingLength: number) {
    let str = integer.toString(2);
    return str.padStart(withPaddingLength, "0");
  }

  export function toString(str: string): number {
    return parseInt(str, 2);
  }
}
