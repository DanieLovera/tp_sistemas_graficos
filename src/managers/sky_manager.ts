import {
    Scene,
    AmbientLight,
    DirectionalLight,
    CubeTexture,
    CubeTextureLoader,
    PMREMGenerator,
    WebGLRenderer,
} from "three";
import { ThreeManager } from "./three_manager";

export class SkyManager {
    private scene!: Scene;
    private renderer!: WebGLRenderer;
    private directionalLight!: DirectionalLight;
    private ambientLight!: AmbientLight;
    private skyTexture!: CubeTexture;
    private daylightTexture!: CubeTexture;
    private nightlightTexture!: CubeTexture;

    private environmentIntensity = 0.3; // 🔆 control global de intensidad

    constructor() {
        const threeManager = ThreeManager.getInstance();
        this.scene = threeManager.scene;
        this.renderer = threeManager.renderer;
        this.setSkyTextures();
        this.setDaylights();
    }

    private setSkyTextures() {
        const loader = new CubeTextureLoader();

        this.daylightTexture = loader.load([
            "public/textures/skies/daylight_px.png",
            "public/textures/skies/daylight_nx.png",
            "public/textures/skies/daylight_py.png",
            "public/textures/skies/daylight_ny.png",
            "public/textures/skies/daylight_pz.png",
            "public/textures/skies/daylight_nz.png",
        ]);

        this.nightlightTexture = loader.load([
            "public/textures/skies/nightlight_px.png",
            "public/textures/skies/nightlight_nx.png",
            "public/textures/skies/nightlight_py.png",
            "public/textures/skies/nightlight_ny.png",
            "public/textures/skies/nightlight_pz.png",
            "public/textures/skies/nightlight_nz.png",
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
        if (this.directionalLight) this.scene.remove(this.directionalLight);
        if (this.ambientLight) this.scene.remove(this.ambientLight);
    }

    private setDaylights() {
        this.directionalLight = new DirectionalLight(0xffffff, 3.0);
        this.directionalLight.position.set(-100, 50, 200);
        this.ambientLight = new AmbientLight(0xfff3e0, 0.4);
    }

    private setNightlights() {
        this.directionalLight = new DirectionalLight(0xccccff, 1.0);
        this.directionalLight.position.set(-100, 50, 200);
        this.ambientLight = new AmbientLight(0x1a1a40, 0.1);
    }

    private applyEnvironmentWithIntensity(texture: CubeTexture, intensity: number) {
        const pmrem = new PMREMGenerator(this.renderer);
        pmrem.compileCubemapShader();

        const envRT = pmrem.fromCubemap(texture);
        const envMap = envRT.texture;

        this.scene.environment = envMap;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.scene.traverse((obj: any) => {
            if (obj.isMesh && obj.material && "envMapIntensity" in obj.material) {
                obj.material.envMapIntensity = intensity;
                obj.material.needsUpdate = true;
            }
        });

        pmrem.dispose();
    }

    render() {
        this.scene.add(this.directionalLight);
        this.scene.add(this.ambientLight);
        this.scene.background = this.skyTexture;
        this.applyEnvironmentWithIntensity(this.skyTexture, this.environmentIntensity);
    }

    setEnvironmentIntensity(value: number) {
        this.environmentIntensity = value;
        this.applyEnvironmentWithIntensity(this.skyTexture, value);
    }
}
