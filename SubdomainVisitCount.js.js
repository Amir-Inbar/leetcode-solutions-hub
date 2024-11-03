// const countDomainVisits = (input) => {
//   const domainVisits = {};

//   for (const entry of input) {
//     const [visit, domain] = entry.split(" ")

//     const cleanDomain = domain.startsWith(".") ? domain.slice(1) : domain

//     const subDomains = cleanDomain.split(".")

//     for (let i = subDomains.length - 1; i >= 0; i--) {
//       const subDomain = subDomains.slice(i).join(".")
//       domainVisits[subDomain] = (domainVisits[subDomain] || 0) + parseInt(visit)
//     }
//   }

//   return input.map(domain => {
//     const [, subDomain] = domain.split(" ")
//     const cleanDomain = subDomain.startsWith(".") ? subDomain.slice(1) : subDomain
//     return `${domainVisits[cleanDomain]} ${cleanDomain}`
//   })
// }

// 
// const result = countDomainVisits(input);
// console.log(result);


/*


objecties
[X] Loop over the sub domains and saperate them into visit and domain
[x] Store the calculate values on hash map in [domain]:[visit]
[] Return the array of domains in the same order


Alternatives
* Loop on the array and than another loop in each domain so we are talking on O(n^2)
*/


// Code


const countDomainVisits = (domains) => {
  const hashMap = {}

  for (const domain of domains) {
    const [visit, subDomain] = domain.split(" ")

    const clearSubdomain = subDomain.startsWith(".") ? subDomain.slice(1) : subDomain
    const subDomains = clearSubdomain.split(".")

    for (let i = subDomains.length - 1; i >= 0; i--) {
      const key = subDomains.slice(i).join(".")
      const value = parseInt(visit)
      hashMap[key] = (hashMap[key] || 0) + value
    }
  }
  return domains.map((domain) => {
    const [, subDomain] = domain.split(" ")
    const clearSubdomain = subDomain.startsWith(".") ? subDomain.slice(1) : subDomain
    return `${hashMap[clearSubdomain]} ${clearSubdomain}`
  })
}



const input = ['9000 app.commador.com', '100 commador.com', '100 google.com', '100 .com'];
// Tests
console.log(countDomainVisits(input));
// result = ['9000 app.commador.com', '9100 commador.com', '100 google.com', '9200 .com']