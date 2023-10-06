const myURL=new URL('https://www.youtube.com:8080/watch?v=WXsD0ZgxjRw')
console.log(myURL.href);
console.log(myURL.host);//return port too
console.log(myURL.hostname);
console.log(myURL.searchParams);