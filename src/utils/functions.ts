function zero(_u: number) {
    return 0;
}

function one(_u: number) {
    return 1;
}

function linear(m: number, b = 0) {
    return (u: number) => {
        return m * (1 - u) + b;
    };
}

function cuadratic(a: number, offset: number) {
    return (u: number) => {
        return Math.pow(a * (u - 0.5), 2) + offset;
    };
}

function sinusoidal(amplitude: number, frequency: number, offset: number) {
    return (u: number) => {
        return amplitude * Math.cos(2 * Math.PI * frequency * u) + offset;
    };
}

function twist(turns: number) {
    return (u: number) => {
        return u * Math.PI * turns;
    };
}

export { zero, one, linear, cuadratic, twist, sinusoidal };
