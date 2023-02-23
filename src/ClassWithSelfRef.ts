import {InterfaceWithSelfRef} from "./InterfaceWithSelfRef.js";

class ClassWithSelfRef implements InterfaceWithSelfRef {

  private readonly inner: InterfaceWithSelfRef | undefined;

  constructor(inner?: InterfaceWithSelfRef) {
    this.inner = inner;
  }

  getSelfRef(): InterfaceWithSelfRef | undefined {
    return this.inner;
  }
}