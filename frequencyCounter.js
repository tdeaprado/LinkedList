
function same(v1, v2) {

    // [1,2,4]  [2,1,16]
    if (v1.length !== v2.length)
        return false // tamanhos diferentes não há como fazer comparação!


    for (let i = 0; i < v1.length; i++) {
        let correctIndex = v2.indexOf(v1[i] ** 2)
        if (correctIndex === -1)
            return false;

        v2.splice(correctIndex, 1)

    }
    return true;



}


var vec1 = [2, 1, 4];
var vec2 = [4, 5, 14];
var vec3 = [4, 16, 1];




console.log (same (vec1,vec2));
console.log(same(vec1, vec3));

