/**
 * @description Class for the resource cache. Taken from the project base and turned into ES6 Class.
 * @export
 * @class Resources
 */
export class Resources {
  /**
   * @description Creates an instance of Resources.
   * @memberof Resources
   */
  constructor() {
    this.resourceCache = {};
    this.callbacks = [];
  }
  /**
   * @description loads a url or an array of URLs
   * @param {*} urlOrArr
   * @memberof Resources
   */
  load(urlOrArr) {
    if (urlOrArr instanceof Array) {
      /**
       * I.e. the user has passed in an array of images.
       */
      urlOrArr.forEach(url => {
        this._load(url);
      });
    } else {
      _load(urlOrArr);
    }
  }
  /**
   * @description actually do the loading and return the image
   * @param {*} url
   * @returns
   * @memberof Resources
   */
  _load(url) {
    if (this.resourceCache[url]) {
      return this.resourceCache[url];
    } else {
      let img = new Image();
      img.onload = () => {
        this.resourceCache[url] = img;
        if (this.isReady()) {
          this.callbacks.forEach(fn => {
            fn();
          });
        }
      };
      this.resourceCache[url] = false;
      img.src = url;
    }
  }
  /**
   * @description fetch a resource from the cache
   * @param {string} url
   * @returns image
   * @memberof Resources
   */
  get(url) {
    return this.resourceCache[url];
  }
  /**
   * @description
   * @returns Boolean
   * @memberof Resources
   */
  isReady() {
    let ready = true;
    for (var k in this.resourceCache) {
      if (this.resourceCache.hasOwnProperty(k) && !this.resourceCache[k]) {
        ready = false;
      }
    }
    return ready;
  }
  /**
   * @description add function to array of callbacks
   * @param {Function} func
   * @memberof Resources
   */
  onReady(func) {
    this.callbacks.push(func);
  }
}
