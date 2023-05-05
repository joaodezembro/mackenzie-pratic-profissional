/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Decrypter {
  decrypt: (data: string) => Promise<string | Record<string, any> | null>;
}
