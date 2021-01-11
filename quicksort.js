//At bubble sort algorithm we have a time error. This algorithm can sort 37 000(max) elements for around 4 sec.
//At quick sort algorithm we have a memory error and can't search the maximum of elements
//This algorithm can sort 2 850 000 elements for around 1 sec.   
//На пузырьковой упирается в ограничение по времени, максимум сортирует 37 000 элементов (тратит около 4 сек)
//При тесте алгоритма быстрой сортировки мы упираемся в ограничение по памяти и максимум элементов, которые удалось
//отсорировать - 2 850 000 элементов приблизительно за 1 секунду.
//При всём прочем данный алгоритм быстрой сортировки в отличие от распространенных вариантов не использует дополнительных массивов,
//а производит все перестановки в начальном массиве, соответственно не использует дополнительной памяти.
//Разбиение на сортируемые части в начале функции происходит случайным образом, чтобы функция также эффективно сортировала почти отсортированные массивы.

//Функция получения рандомного числа в заданных пределах
//The function that give us a random integer between min and max value
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



//функция быстрой ортировки на месте 
//The function of quick sort in place (without any additional arrays)   
const quicksort3 = (array) => {
    let a=1;
    let b=1;
    let l=0;
    let r=array.length;
    if (r<2) {
        return array;}
    let x=getRandomInt(l,r-1);
    let pivot=[array[x]];
    array[x]=array[l];
    array[l]=pivot[0];
    for (let i = 1; i < r; i++) {
        if (array[i]<pivot[0]) {
            let t=array[i];
            array[i]=array[a];
            array[a]=t;
            a+=1;}
        else if (array[i]===pivot[0]) {
            array[i]=array[a];
            array[a]=array[b];
            array[b]=pivot[0];
            a+=1;
            b+=1;} }    
    let less=array.slice(b,a);
    let greater=array.slice(a,r);
    pivot=pivot.concat(array.slice(1,b));
    end=quicksort3(less).concat(pivot,quicksort3(greater));  
    return end;
}



//bubblesort function for comparison
//функция пузырьковой сортировки для сравнения   
const bubbleSortMinToMax = (array) => {
    
    let length = array.length;
    
    if (length < 2) {
        return array;}
    
    let counter = 1;
    
    while (counter > 0) {
        
        counter = 0;
        
        for (let i = 1; i < length; i++) {
        
            if (array[i] < array[i-1]) {
                let temp = array[i];
                array[i] = array[i-1];
                array[i-1] = temp;
                counter += 1;
            }
        }
    }
    
    return array;
}
 

//Тест Test 
    const test = (array) => {
        let length = array.length;
        if (length === 0) {
            return 'Empty array';}
        else if (length === 1) {
            return 'success';}
        else {
            for (let i = 1; i < length; i++) {
                if (array[i] < array[i-i]) {
                return `Error at position ${i} in array ${array}`;}}}
        return 'success';}
 

   
let array = [];
    
let numbers = 2000000;
    
for (let i = 0; i<numbers; i++) {
    array.push(getRandomInt(1,100));
}

    
console.log(test(quicksort3(array)));
