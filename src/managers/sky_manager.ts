import { AmbientLight, CubeTexture, CubeTextureLoader, DirectionalLight, Scene } from "three";
import { ThreeManager } from "./three_manager";

export class SkyManager {
    private scene!: Scene;
    private directionalLight!: DirectionalLight;
    private ambientLight!: AmbientLight;
    private skyTexture!: CubeTexture;
    private daylightTexture!: CubeTexture;
    private nightlightTexture!: CubeTexture;

    constructor() {
        const threeManager = ThreeManager.getInstance();
        this.scene = threeManager.scene;
        this.setSkyTextures();
        this.setDaylights();
    }

    private setSkyTextures() {
        const loader = new CubeTextureLoader();
        this.daylightTexture = loader.load([
            "textures/skies/daylight_px.png",
            "textures/skies/daylight_nx.png",
            "textures/skies/daylight_py.png",
            "textures/skies/daylight_ny.png",
            "textures/skies/daylight_pz.png",
            "textures/skies/daylight_nz.png",
        ]);

        this.nightlightTexture = loader.load([
            "textures/skies/nightlight_px.png",
            "textures/skies/nightlight_nx.png",
            "textures/skies/nightlight_py.png",
            "textures/skies/nightlight_ny.png",
            "textures/skies/nightlight_pz.png",
            "textures/skies/nightlight_nz.png",
        ]);
        this.skyTexture = this.daylightTexture;
    }

    setDaylightTheme() {
        this.clearLights();
        this.setDaylights();
        this.skyTexture = this.daylightTexture;
        this.render();
    }

    setNightlightTheme() {
        this.clearLights();
        this.setNightlights();
        this.skyTexture = this.nightlightTexture;
        this.render();
    }

    private clearLights() {
        this.scene.remove(this.directionalLight);
        this.scene.remove(this.ambientLight);
    }

    private setDaylights() {
        this.directionalLight = new DirectionalLight(0xffffff, 1.0);
        this.directionalLight.position.set(-100, 25, 200);
        this.ambientLight = new AmbientLight(0xfff3e0, 0.4);
    }

    private setNightlights() {
        this.directionalLight = new DirectionalLight(0xccccff, 1);
        this.directionalLight.position.set(-100, 25, 200);
        this.ambientLight = new AmbientLight(0x1a1a40, 0.1);
    }

    render() {
        this.scene.add(this.directionalLight);
        this.scene.add(this.ambientLight);
        this.scene.background = this.skyTexture;
        this.scene.environment = this.skyTexture;
    }
}
