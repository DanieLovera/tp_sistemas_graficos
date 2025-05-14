import { BufferGeometry, Matrix4 } from "three";
import { PostGeometry } from "./post_geometry";
import { PostLampGeometry } from "./post_lamp_geometry";

interface RoadStreetlightGeometryParams {
    postWidth?: number;
    postHeight?: number;
    postRadius?: number;
    postLampWidth?: number;
    postLampHeight?: number;
    postLampDepth?: number;
}

export class RoadStreetlightGeometry {
    geometry: {
        postGeometry: BufferGeometry;
        postLampGeometry: BufferGeometry;
    };

    constructor(optionalParams: RoadStreetlightGeometryParams) {
        const postGeometry = this.createPostGeometry(optionalParams);
        const postLampGeometry = this.createPostLampGeometry(optionalParams, postGeometry);
        this.geometry = {
            postGeometry: postGeometry.geometry,
            postLampGeometry: postLampGeometry.geometry,
        };
    }

    private createPostGeometry(params: RoadStreetlightGeometryParams) {
        const postGeometry = new PostGeometry({
            width: params.postWidth,
            height: params.postHeight,
            radius: params.postRadius,
        });
        return postGeometry;
    }

    private createPostLampGeometry(params: RoadStreetlightGeometryParams, postGeometry: PostGeometry) {
        const postLampGeometry = new PostLampGeometry({
            width: params.postLampWidth,
            height: params.postLampHeight,
            depth: params.postLampDepth,
        });
        postLampGeometry.geometry.translate(postGeometry.width + postLampGeometry.width / 2, postGeometry.height, 0);
        return postLampGeometry;
    }

    applyMatrix(matrix: Matrix4) {
        for (const geometry of Object.values(this.geometry)) {
            geometry.applyMatrix4(matrix);
        }
    }
}
