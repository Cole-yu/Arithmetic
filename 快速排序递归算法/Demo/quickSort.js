var items = [4, 2, 6, 5, 3, 9];
//交换位置
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

//左指针不断加1，直到值大于基准，右指针不断减一，直到值小于基准，互换左右异常点，重复如上操作
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],//选择数组位置中间的拿个数字作为基准值
        i       = left,
        j       = right;
    while (i <= j) {	//递归终止的条件
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);	//互换左右异常点位置
            i++;
            j--;
        }
    }
    return i;	//返回中间基准值的位置,此次递归的划分点索引
}

//递归执行排序，直到子集只剩下一个元素为止
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) { //判断初始时整个数组长度是否大于2，否则直接输出，和后面的停止递归条件无关，items长度在递归中长度固定不变，lenth=5
        index = partition(items, left, right);	//上次递归划分点索引
        if (left < index - 1) {
            quickSort(items, left, index - 1);	//对划分点左侧进行排序
        }
        if (index < right) {					//对划分点右侧进行排序
            quickSort(items, index, right);
        }

    }
    return items;
}

var result = quickSort(items, 0, items.length - 1);
console.log(result);


//-------------------选择数组第一个作为基准值进行划分----------------------
// function quickSort(arr, left, right) {
//     var len = arr.length,
//         partitionIndex,
//         left = typeof left != 'number' ? 0 : left,
//         right = typeof right != 'number' ? len - 1 : right;

//     if (left < right) {
//         partitionIndex = partition(arr, left, right);
//         quickSort(arr, left, partitionIndex-1);
//         quickSort(arr, partitionIndex+1, right);
//     }
//     return arr;
// }

// function partition(arr, left ,right) {     //分区操作
//     var pivot = left,                      //设定基准值（pivot）
//         index = pivot + 1;
//     for (var i = index; i <= right; i++) {
//         if (arr[i] < arr[pivot]) {
//             swap(arr, i, index);
//             index++;
//         }        
//     }
//     swap(arr, pivot, index - 1);
//     return index-1;
// }

// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }