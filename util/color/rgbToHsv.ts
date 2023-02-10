/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://lolengine.net/blog/2013/01/13/fast-rgb-to-hsv.
 * Assumes r, g, and b are in the range [0, 255] and
 * returns h, s, and v in the range [0, 1].
 *
 * @param   {Array<number>} rgb   The RGB color value
 * @param   {number}        rgb.r The red color value
 * @param   {number}        rgb.g The green color value
 * @param   {number}        rgb.b The blue color value
 * @param   {Array<number>} dst   The array to store the HSV values in
 * @return  {Array<number>}       The `dst` array passed in
 */
const rgbToHsv = ([r, g, b]:[number,number,number], dst:Array<number>):number[] => {
    let K = 0.0;

    r /= 255;
    g /= 255;
    b /= 255;
    let tmp = 0;

    if (g < b) {
        tmp = g;
        g = b;
        b = tmp;

        K = -1;
    }

    if (r < g) {
        tmp = r;
        r = g;
        g = tmp;

        K = (-2 / 6) - K;
    }

    const chroma = r - Math.min(g, b);
    const h = Math.abs(K + ((g - b) / ((6 * chroma) + Number.EPSILON)));
    const s = chroma / (r + Number.EPSILON);
    const v = r;

    dst[0] = h;
    dst[1] = s;
    dst[2] = v;

    return dst;
};
export default rgbToHsv 