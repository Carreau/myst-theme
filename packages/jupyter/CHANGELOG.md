# @myst-theme/jupyter

## 0.5.8

### Patch Changes

- 995ed63: Move teo ESM only
- Updated dependencies [995ed63]
  - myst-to-react@0.5.8
  - @myst-theme/providers@0.5.8

## 0.5.7

### Patch Changes

- c3c8175: Update myst dependencies
- Updated dependencies [1d29272]
- Updated dependencies [42314ec]
- Updated dependencies [c3c8175]
- Updated dependencies [bf66da0]
  - myst-to-react@0.5.7
  - @myst-theme/providers@0.5.7

## 0.5.6

### Patch Changes

- e6c1ec89: Added ability to start thebe sessions for notebooks on the correct path such that relative importants and file loading will work. As a result base `myst` packages have also been upgraded, mainly for types so we can consume the new `location` field appropraitely, that holds the path information.
- Updated dependencies [e6c1ec89]
  - myst-to-react@0.5.6
  - @myst-theme/providers@0.5.6

## 0.5.5

### Patch Changes

- @myst-theme/providers@0.5.5
- myst-to-react@0.5.5

## 0.5.4

### Patch Changes

- 7a4d5a6: Add theme-top for articles with different offset or navigation height
- Updated dependencies [7a4d5a6]
  - @myst-theme/providers@0.5.4
  - myst-to-react@0.5.4

## 0.5.3

### Patch Changes

- 1948a7a: Move to GenericParent instead of Root
- 1948a7a: Package updates for myst-frontmatter
- 88097cf: Update icon sizes to be explicit rather than class names
- Updated dependencies [1948a7a]
- Updated dependencies [88097cf]
  - @myst-theme/providers@0.5.3
  - myst-to-react@0.5.3

## 0.5.2

### Patch Changes

- 7d2fb88: Updated `thebe` packages to `0.3.2`
  - @myst-theme/providers@0.5.2
  - myst-to-react@0.5.2

## 0.5.1

### Patch Changes

- f8ab986: Fix embed node to render all children.
- f8ab986: Guard output if null or undefined
  - @myst-theme/providers@0.5.1
  - myst-to-react@0.5.1

## 0.5.0

### Patch Changes

- Updated dependencies [0536fa7]
  - @myst-theme/providers@0.5.0
  - myst-to-react@0.5.0

## 0.4.2

### Patch Changes

- ad81cea5: Add space under jupyter outputs
- 03538542: Upgrade myst packages to 1.1.8
- Updated dependencies [03538542]
  - myst-to-react@0.4.2
  - @myst-theme/providers@0.4.2

## 0.4.1

### Patch Changes

- Updated dependencies [56523c92]
  - @myst-theme/providers@0.4.1
  - myst-to-react@0.4.1

## 0.4.0

### Minor Changes

- 8a4106cd: Update to myst renderer as a react component

### Patch Changes

- 0b363794: Placeholders are now displayed in figures that embed notebook cells with empty outputs
- 92d9179d: Add site level options for hiding the footerlinks or document outline
- f61e188e: Add placeholders to packages
- 68f67c45: Changes overflow behaviour allowing horizontal scroll on outputs
- 02158b75: Change to ThebeMarkdownCell
- d714469a: Updates to myst-common dependencies
- 88aa3183: Add Jupyter error tray for notebook execution errors
- Updated dependencies [b2010904]
- Updated dependencies [8a4106cd]
- Updated dependencies [476a7153]
- Updated dependencies [d714469a]
  - myst-to-react@0.4.0
  - @myst-theme/providers@0.4.0

## 0.3.8

### Patch Changes

- 4f898a5a: Hide compute controls and figure decoration when thebe is not enabled but still show minimal links to source notebooks.
- d18c793d: Fix busy state in thebe
  - @myst-theme/providers@0.3.8
  - myst-to-react@0.3.8

## 0.3.7

### Patch Changes

- d21b095c: Defensive changes to avoid runtime issues with deployed content with older mdast. Specifically this guards against not being able to look up notebook scopes in the execution provided because of undefined slugs.
  - @myst-theme/providers@0.3.7
  - myst-to-react@0.3.7

## 0.3.6

### Patch Changes

- 36b86b05: Add base url to notebook source links
  - @myst-theme/providers@0.3.6
  - myst-to-react@0.3.6

## 0.3.5

### Patch Changes

- Restore widgets on navigate
- Move controls to the embed node to show the notebook source.
  - @myst-theme/providers@0.3.5
  - myst-to-react@0.3.5

## 0.3.4

### Patch Changes

- b81068ec: Updates for Jupyter
- Updated dependencies [b81068ec]
  - myst-to-react@0.3.4
  - @myst-theme/providers@0.3.4

## 0.3.3

### Patch Changes

- beee0d67: Patch myst-block bug
- Add a status indicator for binder/jupyterlite
  - @myst-theme/providers@0.3.3

## 0.3.2

### Patch Changes

- @myst-theme/providers@0.3.2

## 0.3.1

### Patch Changes

- 27c412c3: upgraded to thebe 0.2.2
- 069b1da0: Improvements to thebe for initial rendering
  - @myst-theme/providers@0.3.1

## 0.3.0

### Minor Changes

- 6404d386: Update to myst v1 release (ESM)

### Patch Changes

- Updated dependencies [6404d386]
  - @myst-theme/providers@0.3.0

## 0.2.10

### Patch Changes

- 067280cb: Upgrades to myst parsers and frontmatter
- Updated dependencies [067280cb]
- Updated dependencies [f3cdccd5]
- Updated dependencies [f9729bd3]
- Updated dependencies [f397bb2d]
  - @myst-theme/providers@0.2.10

## 0.2.9

### Patch Changes

- @myst-theme/providers@0.2.9

## 0.2.8

### Patch Changes

- @myst-theme/providers@0.2.8

## 0.2.7

### Patch Changes

- 941b59cd: Avoid hooks inside of node-renderers
  - @myst-theme/providers@0.2.7

## 0.2.6

### Patch Changes

- @myst-theme/providers@0.2.6

## 0.2.5

### Patch Changes

- 4232ab31: Move to hover links rather than click links
  - @myst-theme/providers@0.2.5

## 0.2.4

### Patch Changes

- @myst-theme/providers@0.2.4

## 0.2.3

### Patch Changes

- @myst-theme/providers@0.2.3

## 0.2.2

### Patch Changes

- @myst-theme/providers@0.2.2

## 0.2.1

### Patch Changes

- @myst-theme/providers@0.2.1

## 0.2.0

### Patch Changes

- Updated dependencies [e8802ba1]
- Updated dependencies [e8802ba1]
- Updated dependencies [e8802ba1]
  - @myst-theme/providers@0.2.0

## 0.1.38

### Patch Changes

- Updated dependencies [8615bb06]
  - @myst-theme/providers@0.1.38

## 0.1.37

### Patch Changes

- ae4848dd: Add Thebe to theme
- Updated dependencies [ae4848dd]
  - @myst-theme/providers@0.1.37

## 0.1.36

### Patch Changes

- 4ad8313a: Improve the rendering of code outputs in jupyter
  - @myst-theme/providers@0.1.36

## 0.1.35

### Patch Changes

- @myst-theme/providers@0.1.35

## 0.1.34

### Patch Changes

- f125d15: Update packages to latest versions. Add JATS support.
- f125d15: Remove console.log
- Updated dependencies [f125d15]
  - @myst-theme/providers@0.1.34

## 0.1.33

### Patch Changes

- @myst-theme/providers@0.1.33

## 0.1.32

### Patch Changes

- @myst-theme/providers@0.1.32

## 0.1.31

### Patch Changes

- @myst-theme/providers@0.1.31

## 0.1.30

### Patch Changes

- f03ceba: Fixes logic that identified outputs as all safe when unsafe outputs were mixed with safe in the same output array. [issue 34](https://github.com/executablebooks/myst-theme/issues/34)
- e35e10e: Update packages (especially headlessui)
  - @myst-theme/providers@0.1.30

## 0.1.29

### Patch Changes

- @myst-theme/providers@0.1.29

## 0.1.28

### Patch Changes

- @myst-theme/providers@0.1.28

## 0.1.27

### Patch Changes

- 6083890: Upgrade myst to v0.1.17
- Updated dependencies [6083890]
  - @myst-theme/providers@0.1.27

## 0.1.26

### Patch Changes

- @myst-theme/providers@0.1.26

## 0.1.25

### Patch Changes

- 28fc827: Update components to new myst-parser
- Updated dependencies [28fc827]
  - @myst-theme/providers@0.1.25

## 0.1.24

### Patch Changes

- @myst-theme/providers@0.1.24

## 0.1.23

### Patch Changes

- @myst-theme/providers@0.1.23

## 0.1.22

### Patch Changes

- b314737: Introduce thebe-core!
  - @myst-theme/providers@0.1.22

## 0.0.3

### Patch Changes

- 90ffec2: Updates to myst dependencies
- Updated dependencies [90ffec2]
  - @myst-theme/providers@0.1.21

## 0.0.2

### Patch Changes

- 5ccf410: Update @curvenote/connect to 0.0.7
- 5ccf410: Move to nbtx, remove @curvenote/blocks

## 0.0.1

### Patch Changes

- Updates for repackaging for jupyterlab-myst
- Updated dependencies
  - @myst-theme/providers@0.1.20
