import {existsSync} from 'fs';

export class Utils {
  static isExistsSync(path: string) {
    return existsSync(path);
  }
}
