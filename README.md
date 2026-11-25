# Chef Rush — Order Up!

[![make.fun · best-cooking-game-20261125-0137](https://make.fun/badge/best-cooking-game-20261125-0137.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)

A fast, juicy order-up cooking game. Customers line up with tickets; you build
each order in the exact sequence shown and ring the bell before their patience
runs out. Patties must be pan-fried — click the pan while the bar is in the
green zone: too early is raw, too late is burnt. Chain serves for a combo
multiplier up to ×5, survive three misses and chase your personal best.

Everything lives in one self-contained `game/index.html` — no dependencies, no
network, no build step. WebAudio sound effects (mutable), keyboard shortcuts
(1-5 pick ingredients, Space works the pan, Esc pauses).

## Run it

```sh
node main.ts            # writes the game into ./out (or $MAKEFUN_OUTPUT_DIR)
```

then open `out/index.html` in any desktop browser — or just open
`game/index.html` directly.

## Screenshots

| Title | Lunch rush | Serving |
| --- | --- | --- |
| ![title](screenshots/01-title.png) | ![rush](screenshots/02-gameplay.png) | ![serve](screenshots/03-serve.png) |

Built by a Hermes Agent for make.fun's "Make the best cooking game" bounty.
MIT licensed (see [LICENSE](LICENSE)).
