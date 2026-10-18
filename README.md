# Rubik's Cube 3D

A 3D Rubik's Cube built with React, TypeScript, Three.js, and React Three Fiber. The project currently includes a 3D scene, cube face definitions, centered cubie-coordinate generation, and sticker selection based on cubie positions.

> This project is a work in progress. The scene and initial cube-domain logic are being developed. Layer turns, the animation queue, solving logic, and move notation are not yet implemented.

## Getting started

You'll need [Node.js](https://nodejs.org/) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite to view the app. Use the mouse to orbit and zoom around the scene if the camera controls are enabled.

## Available scripts

| Command             | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Start the Vite development server                    |
| `npm run build`     | Type-check the project and create a production build |
| `npm run preview`   | Serve the production build locally                   |
| `npm run lint`      | Run Oxlint                                           |
| `npm run fmt`       | Format the project with Oxfmt                        |
| `npm run fmt:check` | Check formatting without changing files              |

## Tech stack

- React 19 and TypeScript
- Three.js with React Three Fiber
- React Three Drei for scene helpers and 3D components
- Leva for interactive development controls
- maath for mathematical utilities and animation
- Tailwind CSS
- Vite
- Oxlint and Oxfmt

## Project layout

- `src/app/` — application entry point and root component
- `src/scene/` — 3D scene, camera controls, lighting, and environment
- `src/scene/config/` — scene configuration, including lighting
- `src/cube/domain/` — face definitions, coordinate generation, and sticker selection
- `src/cube/rendering/` — cube and cubie meshes
- `src/types.ts` — shared TypeScript types
- `src/ui/` — HTML overlay and interface components
- `src/styles/` — global styles

## Development approach

The project is being built incrementally, with a focus on separating cube-domain logic from 3D rendering, animation, camera controls, and UI.

The planned development stages are:

1. Establish cube geometry and domain rules.
2. Complete cubie rendering and sticker placement.
3. Implement layer turns, animation, and move sequencing.
4. Add move notation, keyboard controls, and whole-cube rotation.
5. Implement scrambling, reset behavior, and solved-state detection.

The architecture and feature set will evolve as development progresses.
