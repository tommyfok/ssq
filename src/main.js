var btnReset = document.getElementById('reset');
var btnMake = document.getElementById('make');
var numList = document.getElementById('num-list');

console.log(btnMake, btnReset);

btnReset.addEventListener('click', function () {
    numList.innerHTML = '';
});

btnMake.addEventListener('click', function() {
    var newLi = document.createElement('li');
    var nums = makeNums();
    nums.forEach(function(num) {
        newLi.innerHTML += '<span>' + num + '</span>';
    });
    numList.appendChild(newLi);
});

function makeNums() {
    var result = [];
    var newNum = function(max) {
        var max = max || 33;
        return Math.floor(Math.random() * max) + 1;
    };
    while(result.length < 6) {
        let num = newNum();
        if (result.indexOf(num) === -1) {
            result.push(num);
        }
    }
    result.sort(function(a, b) {
        return a > b ? 1 : -1;
    });
    result.push(newNum(16));
    return result;
}
