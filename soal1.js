const dataArray  = [
    { Nama: "Fahmi", Alamat: "Jakarta" },
    { Nama: "Romi", Alamat: "Solo" },
    { Nama: "Andri", Alamat: "Jakarta" },
    { Nama: "Fadillah", Alamat: "Banyuwangi" },
    { Nama: "Ruli", Alamat: "Bandung" },
    { Nama: "Rudi", Alamat: "Bali" },
    { Nama: "Dendi", Alamat: "Purwokerto" },
    { Nama: "Zaki", Alamat: "Madiun" },
]


const bubbleSort = (data) => {
    let totalData = data.length;
    for (let i = 0; i < totalData - 1; i++) {
        for (let j = 0; j < totalData - 1 - i; j++) {
            if (data[j].Nama > data[j + 1].Nama) {
                let swap = data[j];
                data[j] = data[j + 1];
                data[j + 1] = swap;
            }
        }
    }
    return data;
}

const selectionSort = (data) => {
    let totalData = data.length;
    for (let i = 0; i < totalData - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < totalData; j++) {
            if (data[j].Nama < data[minIndex].Nama) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let swap = data[i];
            data[i] = data[minIndex];
            data[minIndex] = swap;
        }
    }
    return data;
}

//Bubble Sort
const result = bubbleSort(dataArray)
console.log('Bubble Sort = \n',result)

//Selection Sort
const resultSellection = selectionSort(dataArray)
console.log( 'Selection sort = \n',resultSellection )