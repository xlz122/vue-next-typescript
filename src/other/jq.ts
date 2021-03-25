class Jq {
  constructor(arg: any) {
    this.element = document.querySelector(arg);
  }
  element: null;

  click(fn: any): void {
    (this.element as any).addEventListener('click', fn);
  }
}

export default function $(arg: any) {
  return new Jq(arg);
}
