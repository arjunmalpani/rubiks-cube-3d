
import { describe, expect, it } from "vitest";
import * as THREE from "three";

const FACE_NORMALS = {
    R: new THREE.Vector3(1, 0, 0),
    L: new THREE.Vector3(-1, 0, 0),
    U: new THREE.Vector3(0, 1, 0),
    D: new THREE.Vector3(0, -1, 0),
    F: new THREE.Vector3(0, 0, 1),
    B: new THREE.Vector3(0, 0, -1),
};

const WORLD_DIRECTIONS = {
    right: new THREE.Vector3(1, 0, 0),
    left: new THREE.Vector3(-1, 0, 0),
    top: new THREE.Vector3(0, 1, 0),
    bottom: new THREE.Vector3(0, -1, 0),
    front: new THREE.Vector3(0, 0, 1),
    back: new THREE.Vector3(0, 0, -1),
};

function resolveFace(
    orientation: THREE.Quaternion,
    worldDirection: THREE.Vector3,
) {
    // Convert a world direction into the cube's local coordinate space.
    const localDirection = worldDirection
        .clone()
        .applyQuaternion(orientation.clone().invert());

    return Object.entries(FACE_NORMALS).find(
        ([, normal]) => normal.dot(localDirection) > 0.999,
    )?.[0];
}

describe("cube orientation", () => {
    it("maps the initial faces to their matching world directions", () => {
        const orientation = new THREE.Quaternion();

        expect(resolveFace(orientation, WORLD_DIRECTIONS.front)).toBe("F");
        expect(resolveFace(orientation, WORLD_DIRECTIONS.top)).toBe("U");
        expect(resolveFace(orientation, WORLD_DIRECTIONS.right)).toBe("R");
    });

    it("maps the original bottom face to world-front after an upward quarter-turn", () => {
        const orientation = new THREE.Quaternion();

        const rotation = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(1, 0, 0),
            -Math.PI / 2,
        );

        orientation.premultiply(rotation);

        expect(resolveFace(orientation, WORLD_DIRECTIONS.front)).toBe("D");
    });

    it("returns to the original orientation after four quarter-turns", () => {
        const orientation = new THREE.Quaternion();

        const rotation = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(1, 0, 0),
            -Math.PI / 2,
        );

        for (let i = 0; i < 4; i++) {
            orientation.premultiply(rotation);
        }

        expect(resolveFace(orientation, WORLD_DIRECTIONS.front)).toBe("F");
        expect(resolveFace(orientation, WORLD_DIRECTIONS.top)).toBe("U");
    });
});
