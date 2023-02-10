/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from https://gist.github.com/mjackson/5311256.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {Array<number>}                hsv The HSV color value
 * @param   {number}                       hsv.h     The hue
 * @param   {number}                       hsv.s     The saturation
 * @param   {number}                       hsv.v     The value
 * @param   {Uint8Array|Uint8ClampedArray} dst The array to store the RGB values in
 * @return  {Uint8Array|Uint8ClampedArray}     The `dst` array passed in
 */
const hsvToRgb = ([h, s, v]: [number, number, number], dst:Uint8Array|Uint8ClampedArray) => {
    if (s === 0) {
        dst[0] = dst[1] = dst[2] = (v * 255) + 0.5;
        return dst;
    }

    // keep hue in [0,1) so the `switch(i)` below only needs 6 cases (0-5)
    h %= 1;
    const i = (h * 6) | 0;
    const f = (h * 6) - i;
    const p = v * (1 - s);
    const q = v * (1 - (s * f));
    const t = v * (1 - (s * (1 - f)));

    let r = 0;
    let g = 0;
    let b = 0;

    switch (i) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
    }

    // Add 0.5 in order to round. Setting integer TypedArray elements implicitly floors.
    dst[0] = (r * 255) + 0.5;
    dst[1] = (g * 255) + 0.5;
    dst[2] = (b * 255) + 0.5;
    return dst;
};
export default hsvToRgb