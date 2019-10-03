const CarDetails = [
        { price:400000 , year:2015, miles:25000, make:"Maruti", model:"Swift Dzire",
       location:"MG Road", city:"Gurgaon", postedOn:"2 Feb",
       image:"https://i.imgur.com/ySIJH9R.png", fuel:"Petrol", featured:true},
       
        { price:480000 , year:2012, miles:75000, make:"Toyota", model:"Etios",
       location:"Sector 18", city:"Noida", postedOn:"5 Feb",
       image:"https://i.imgur.com/m6kBxtO.png", fuel:"Diesel", featured:true},
        { price:300000 , year:2013, miles:55000, make:"Honda", model:"City",
       location:"Rohini", city:"Delhi", postedOn:"10 Feb",
       image:"https://i.imgur.com/dE5wGak.png", fuel:"Petrol", featured:true},
        { price:400000 , year:2015, miles:25000, make:"Maruti", model:"Swift",
       location:"MG Road", city:"Gurgaon", postedOn:"2 Feb",
       image:"https://i.imgur.com/DBvxiVR.png", fuel:"Diesel", featured:false},
       
        { price:480000 , year:2012, miles:75000, make:"Toyota", model:"Etios",
       location:"Sector 18", city:"Noida", postedOn:"5 Feb",
       image:"https://i.imgur.com/qbTLYvJ.png", fuel:"Diesel", featured:false},
        { price:300000 , year:2013, miles:55000, make:"Honda", model:"City",
       location:"Rohini", city:"Delhi", postedOn:"10 Feb",
       image:"https://i.imgur.com/epcJiAL.png", fuel:"Petrol", featured:false}
       
]

export function getCarDetails() {
    return CarDetails;
}