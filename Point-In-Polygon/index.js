module.exports = function pointInPoly(poly, point) {
    const angles = [];
    for (let i = 0; i < poly.length; i++) {
        const p1 = poly[i];
        const p2 = poly[(i + 1) % poly.length];

        const v1 = [p1[0] - point[0], p1[1] - point[1]];
        const v2 = [p2[0] - point[0], p2[1] - point[1]];
        const cosine = (v1[0] * v2[0] + v1[1] * v2[1]) / (Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1]) * Math.sqrt(v2[0] * v2[0] + v2[1] * v2[1]));
        const alpha = Math.acos(cosine);
        angles.push(alpha);
    }
    const diff = (angles.reduce((acc, cur) => acc + cur, 0) - 2 * Math.PI);
    return diff * diff < Number.EPSILON;
}