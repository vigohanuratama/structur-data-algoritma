const binarySearch = (data, target) => {
    let left = 0;
    let right = data.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (data[mid] === target) {
            return mid
            break;
        } else if (data[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Jika Tidak Menemukan sesuatu
    return -1
}

const dataArray = [19, 40, 10, 90, 2, 50, 60, 50, 1];
const input = 50

const output = binarySearch(dataArray, input)

if(output !== -1){
    console.log(`Angka ${input} ada di indeks ke ${output}`)
}else {
    console.log(`Angka ${input} tidak ada dalam array`)
}
