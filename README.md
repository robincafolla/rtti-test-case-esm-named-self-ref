# Test case for RTTI

## The issue

When outputting ESM modules using `"target": "es2021"`, RTTI adds an import without a `.js` file ending to classes which use named parameters. This will result in a `ERR_MODULE_NOT_FOUND` error when you try to run the file with node.

## Testing

To test. Run:

```bash
npm run build --experimental-specifier-resolution=node
```

Take a look at `build/src/ClassWithSelfRef.js` and `build/src/ClassWithSelfRefNamedParams.js`.

The class with Named Params has these two lines:

```js
import * as LΦ_1 from "./InterfaceWithSelfRef.js";
import * as LΦ_0 from "./InterfaceWithSelfRef";
```

the second shouldn't be there.

If you examine the build output in `build/src/ClassWithSelfRef.js` you can see that the additional import is omitted.

# Workarounds

Don't use named parameters with self referencing dependencies.