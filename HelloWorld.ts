type HelloWorld = string; // expected to be a string

/* _____________ テストケース _____________ */
import type { Equal, Expect, NotAny } from "@type-challenges/utils";

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];

//　引用元
// https://github.com/type-challenges/type-challenges/tree/main/questions/00013-warm-hello-world
