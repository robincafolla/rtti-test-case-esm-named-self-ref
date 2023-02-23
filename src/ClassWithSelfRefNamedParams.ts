import {InterfaceWithSelfRef} from "./InterfaceWithSelfRef.js";

class ClassWithSelfRefNamedParams implements InterfaceWithSelfRef {

  private readonly inner: InterfaceWithSelfRef | undefined;

  constructor({
                inner,
              }:{
                inner?: InterfaceWithSelfRef;
              }) {
    this.inner = inner;
  }

  getSelfRef(): InterfaceWithSelfRef | undefined {
    return this.inner;
  }
}