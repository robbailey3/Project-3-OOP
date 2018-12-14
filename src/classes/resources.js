export class Resources {
  constructor() {
    this.resourceCache = {};
    this.callbacks = [];
    console.log(this);
  }
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
  get(url) {
    return this.resourceCache[url];
  }
  isReady() {
    let ready = true;
    for (var k in this.resourceCache) {
      if (this.resourceCache.hasOwnProperty(k) && !this.resourceCache[k]) {
        ready = false;
      }
    }
    return ready;
  }
  onReady(func) {
    this.callbacks.push(func);
  }
}
