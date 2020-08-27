declare module 'unsplash-js' {
  export default class Unsplash {
    constructor(options: { accessKey: string });
    search: any;
  }
  export function toJson(res: Object): Object;
}
