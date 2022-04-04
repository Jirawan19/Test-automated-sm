const po = {
    poItem: [
        {
            "status": "accepted",
            "name": "ยาสีฟัน",
            "price": 100,
            "qty": 3,
            "qtyRecieved": 2
        },
        {
            "status": "rejected",
            "name": "แปรงสีฟัน",
            "price": 200,
            "qty": 2,
            "qtyRecieved": 1
        }
    ],
    "vat": 0
}
let outputPo = {
    "poItemRecieved": [],
    "poItem": [],
}
const previewPo = (po, outputPo) => {
    // let sumRecieved = 0
    let sum = 0
    for (let index = 0; index < po.poItem.length; index++) {
        // if(po.poItem[index].status === "accepted"){
            // outputPo.poItemRecieved.push(
            //     {
            //         "name": po.poItem[index].name,
            //         "sumPrice": po.poItem[index].price * po.poItem[index].qtyRecieved
            //     }
            // )
            // sumRecieved += po.poItem[index].qtyRecieved * po.poItem[index].price

            outputPo.poItem.push(
                {
                    "name": po.poItem[index].name,
                    "sumPrice": po.poItem[index].price * po.poItem[index].qty
                }
            )
            sum += po.poItem[index].qty * po.poItem[index].price
        // }
    }
    // outputPo.netPriceRecieved = sumRecieved + (sumRecieved * (7 / 100))
    outputPo.netPrice = sum + (sum * (7 / 100))
}
previewPo(po, outputPo)
console.log(outputPo);
