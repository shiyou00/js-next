class Counter {
  #x = 0;

  #increment() {
    this.#x++;
  }

  onClick() {
    this.#increment();
  }
}

const c = new Counter();
c.onClick(); // 正常
// c.#increment(); // 打包编译就会报错
