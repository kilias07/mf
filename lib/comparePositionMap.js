export const comparePositionMap = (position1, position2) => {
    return position2
        ? position1[0] === position2[1] && position1[1] === position2[0]
        : false;
}