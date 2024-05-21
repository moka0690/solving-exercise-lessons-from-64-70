function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    if (zName.length > 1) {
  const name = zName;
  const firstname = name.split(" ")[0]
  const lesNameFarstChar= name.split(" ")[1].charAt(0).toUpperCase()
   return firstname + " " + lesNameFarstChar+"."
    }
        // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
 
  function ageWithMessage(zAge) {
    const Number = zAge
    const age = Number.split(" ")[0]
         // Write Your Code Here
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
      return `Your Age Is ${age}`
      
    }

  function countryTwoLetters(zCountry) {
    const country = zCountry.slice(0,2)
    const  countryTwolt = country.toUpperCase()
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return `You Live In ${countryTwolt}`
  }
  
  function fullDetails() {
    const name = namePattern(zName)
    const age = ageWithMessage(zAge)
    const country = countryTwoLetters(zCountry)

    return` hello ${name}, ${age}, ${country}`;
}
  return fullDetails(zName, zAge, zCountry); // Do Not Edit This
  }

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY



  const itsMe= () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function



const urlCreate=(protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org




const checker=(zName)=>(status)=>(salary)=> status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
  
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble