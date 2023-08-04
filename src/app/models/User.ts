export interface User<G> {
  getName<T>(): T;
  getSurName(): G;
}