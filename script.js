const nilai = 75; //nilai 75 untuk kkm
const keterangan = nilai > 74 ? 'Anda orang yang kreatif dan inovatif' : 'Tingkatkan kreativitas dan inovasi Anda';
console.log(keterangan);

const kondisiAnd = nilai > 74 && 'Bagus';
const kondisiOr = nilai < 73 || 'Jangan menyerah';
console.log(kondisiAnd);
console.log(kondisiOr);

const listKreativitas = [
    {
        nama: "Jeremi",
        kekreativitas: 11
    },
    {
        nama: "Junita",
        kekreativitas: 14
    },
    {
        nama: "Reyhan",
        kekreativitas: 8
    },
    {
        nama: "Loki",
        kekreativitas: 4
    }
];

//hasil ke kreativitasan siswa akan dinilai oleh guru

const listNama = listKreativitas.map((nama) => nama.kekreativitas);
console.log(listNama);

//mengfilter >10 adalah orang kreatif
const listKreatif = listKreativitas.filter((nama) => nama.kekreativitas > 10);
console.log(listKreatif);