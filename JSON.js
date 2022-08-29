const user = {id: 1, name: 'Dipto', job: 'actor'};
const stringify = JSON.stringify(user);
console.log(stringify);

const shop = {
    owner : 'Alia',
    address: {
        street: 'kbom kaloni mumbai',
        city: 'Mumbai',
        country: 'India'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
const stringi = JSON.stringify(shop);
console.log(stringi);