---
layout: ../../layouts/BaseLayout.astro
title: The Zen of Rust
pubDate: 2023-10-01
---

## Managing Memory Safely

Rust ensures memory safety without a garbage collector. It achieves this through a system of ownership with a set of rules that the compiler checks at compile time.

Here is a classic example of ownership in action:

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;

    // println!("{}, world!", s1); // This would verify error!
    println!("{}, world!", s2);
}
```

### The Rules of Ownership

1.  Each value in Rust has a *owner*.
2.  There can only be one owner at a time.
3.  When the owner goes out of scope, the value will be dropped.

We can also use `inline code` like `let mut x = 5;` to denote variables within our prose.
