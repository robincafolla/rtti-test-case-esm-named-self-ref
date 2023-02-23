export interface InterfaceWithSelfRef {
  getSelfRef():InterfaceWithSelfRef | undefined;
}