var mySearch;
mySearch = function (sor, subS) {
    var result = sor.search(subS);
    if (result == 1) {
        return true;
    }
    else {
        return false;
    }
};
