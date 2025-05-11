import { DirectionalLight, AmbientLight, Scene, AxesHelper, MeshBasicMaterial, Mesh } from "three";
import { Ground } from "./ground";
import * as config from "./config/road_path.json";
import { cuadratic, linear, twist } from "./utils/functions";
import { CircularBuildingGeometry } from "./geometry/circular_building_geometry";
import { EllipticalBuildingGeometry } from "./geometry/elliptical_building_geometry";
import { HexagonalBuildingGeometry } from "./geometry/hexagonal_building_geometry";
import { RectangularBuildingGeometry } from "./geometry/rectangular_building_geometry";
import { RoadGeometry } from "./geometry/road_geometry";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { RoadRampGeometry } from "./geometry/road_ramp_geometry";
import { RoadArchGeometry } from "./geometry/road_arch_geometry";
import { RoadTunnelGeometry } from "./geometry/road_tunnel_geometry";

class World {
    constructor(scene: Scene) {
        const light = new DirectionalLight(0xffffff, 1);

        light.position.set(1, 1, 1);
        scene.add(light);

        const ambientLight = new AmbientLight(0x666666);
        scene.add(ambientLight);

        const ground = new Ground(100, 100);
        ground.insert(scene);

        const axes = new AxesHelper(3);
        scene.add(axes);

        // new Lot(circularBuilding.mesh);

        // buildings begin
        const circularBuildingGeometry = new CircularBuildingGeometry({
            radius: 2,
            axialSegments: 10,
            axialSegmentsHeight: 1,
            scaleFn: linear(1, 0.5),
        });
        circularBuildingGeometry.geometry.translate(15, 0, 5);

        const ellipticalBuildingGeometry = new EllipticalBuildingGeometry({
            a: 1,
            b: 2,
            axialSegments: 10,
            axialSegmentsHeight: 1,
        });
        ellipticalBuildingGeometry.geometry.translate(-20, 0, -5);

        const hexagonalBuildingGeometry = new HexagonalBuildingGeometry({
            radius: 2,
            axialSegments: 10,
            axialSegmentsHeight: 1,
            scaleFn: cuadratic(2, 1),
        });
        hexagonalBuildingGeometry.geometry.translate(-15, 0, 25);

        const rectangularBuildingGeometry = new RectangularBuildingGeometry({
            width: 2,
            depth: 4,
            axialSegments: 10,
            axialSegmentsHeight: 1,
            torsionFn: twist(0.5),
        });
        rectangularBuildingGeometry.geometry.translate(10, 0, 30);

        const buildingGeometries = mergeGeometries([
            circularBuildingGeometry.geometry,
            ellipticalBuildingGeometry.geometry,
            hexagonalBuildingGeometry.geometry,
            rectangularBuildingGeometry.geometry,
        ]);
        const buildingMaterial = new MeshBasicMaterial({ color: 0xffff, wireframe: true });
        const buldingMesh = new Mesh(buildingGeometries, buildingMaterial);
        scene.add(buldingMesh);
        // buildings end

        // road begin
        const roadGeometry = new RoadGeometry({
            controlPoints: config.controlPoints,
            width: config.width,
            height: config.height,
            segments: config.segments,
        });
        const extrudeMaterial = new MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
        const extrudeMesh = new Mesh(roadGeometry.geometry, extrudeMaterial);
        scene.add(extrudeMesh);
        // road end

        // archs begin
        const segments7 = 2;
        const from7 = 0.5;
        const to7 = 0.505;
        const s7 = roadGeometry.createSubroad(from7, to7, segments7);
        const archGeometr7 = new RoadArchGeometry({
            curve: s7,
            radius: 2,
        });

        const ex7 = new MeshBasicMaterial({ color: 0xffff, wireframe: true });
        const e7 = new Mesh(archGeometr7.geometry, ex7);
        scene.add(e7);

        const segments4 = 2;
        const from4 = 0.49;
        const to4 = 0.495;
        const s4 = roadGeometry.createSubroad(from4, to4, segments4);
        const archGeometry = new RoadArchGeometry({
            curve: s4,
            radius: 2,
        });

        const exm = new MeshBasicMaterial({ color: 0xffff, wireframe: true });
        const ex = new Mesh(archGeometry.geometry, exm);
        scene.add(ex);

        const segments5 = 2;
        const from5 = 0.48;
        const to5 = 0.485;
        const s5 = roadGeometry.createSubroad(from5, to5, segments5);
        const archGeometry5 = new RoadArchGeometry({
            curve: s5,
            radius: 2,
        });

        const exm5 = new MeshBasicMaterial({ color: 0xffff, wireframe: true });
        const ex5 = new Mesh(archGeometry5.geometry, exm5);
        scene.add(ex5);

        const segments6 = 2;
        const from6 = 0.47;
        const to6 = 0.475;
        const s6 = roadGeometry.createSubroad(from6, to6, segments6);
        const archGeometry6 = new RoadArchGeometry({
            curve: s6,
            radius: 2,
        });

        const exm6 = new MeshBasicMaterial({ color: 0xffff, wireframe: true });
        const ex6 = new Mesh(archGeometry6.geometry, exm6);
        scene.add(ex6);
        // arch end

        // tunnel begin
        const segments3 = 10;
        const from3 = 0.8;
        const to3 = 0.9;
        const s3 = roadGeometry.createSubroad(from3, to3, segments3);
        const tunnelGeometry = new RoadTunnelGeometry({
            curve: s3,
            width: 2,
            height: 3,
            radius: 2,
        });

        const exm3 = new MeshBasicMaterial({ color: 0xffff, wireframe: true });
        const ex3 = new Mesh(tunnelGeometry.geometry, exm3);
        scene.add(ex3);
        // tunnel end

        // ramp begin
        const segments = 2;
        const from = 0.0;
        const to = 0.01;
        const s2 = roadGeometry.createSubroad(from, to, segments);

        const roadRampGeometry = new RoadRampGeometry({ width: 4, height: 1, curve: s2 });
        const exm1 = new MeshBasicMaterial({ color: 0xffff, wireframe: true });
        const ex2 = new Mesh(roadRampGeometry.geometry, exm1);
        scene.add(ex2);

        const segments2 = 2;
        const from2 = 0.015;
        const to2 = 0.025;
        const s22 = roadGeometry.createSubroad(from2, to2, segments2);

        const roadRampGeometry2 = new RoadRampGeometry({ width: 4, height: 1, curve: s22, reverse: true });
        const exm12 = new MeshBasicMaterial({ color: 0xffff, wireframe: true });
        const ex22 = new Mesh(roadRampGeometry2.geometry, exm12);
        scene.add(ex22);
        // ramp end
    }

    animate() {
        return;
    }
}

export { World };
