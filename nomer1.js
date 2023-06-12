// nomer 1
const cekHariKerja = (day) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }
            else{
                reject ('Hari ini bukan hari kerja')
            }
        }, 3000)
    })
}

cekHariKerja("senin")
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

const runDay = async() => {
    try{
        const hari = await cekHariKerja("kamis")
        console.log(hari);
    }
    catch(error){
        console.log(error);
    }
}
runDay()
