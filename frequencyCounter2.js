function same (v1,v2){

    var freq1 ={};
    var freq2 = {};

    if (v1.lentgh !== v2.lentgh){
        return false;
    }

    for (let val of v1)
    {
        freq1[val] = (freq1[val]||0)+1;
    }

    for (let val of v2)
    {
        freq2[val] = (freq2[val]||0)+1;
    }

    for (let key in freq1)
    {
        if (!(key**2 in freq2)){
            return false;
        }
        if (freq2[key**2] !== freq1[key])
        {
            return false;
        }

    }

}



v1 = [3,2,4];
v2 = [5,6,9];
v3=  [4,16,9]