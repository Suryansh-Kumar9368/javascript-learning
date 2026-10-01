let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// month starts from 0 to 11
let myCreatedDate=new Date(2023,0,23)  
console.log(myCreatedDate.toLocaleDateString());

let Date1=new Date(2023,0,23,5,6,0)
console.log(Date1);
console.log(Date1.toLocaleString());

let date2= new Date("2023-01-23T05:06:00")
console.log(date2.toLocaleString());

// to find seconds from 1970 to now we use Date.now() method
let myTImeStamp=Date.now()
console.log(Math.floor(Date.now()/1000));

// to find time ,month ,year,day,hours,minutes,seconds we use getTime() method
let newDate1=new Date()
console.log(newDate1.getTime());
console.log(newDate1.getFullYear());
console.log(newDate1.getMonth());

console.log(newDate1.toLocaleString('default',{
    weekday:'long',
    
})
);
