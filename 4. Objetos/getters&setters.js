// Get: => access properties
// Set: => change (mutate) them

const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    //fullName: function() {}, or...the easiest way:
    fullName() {
        return `${person.firstName} ${person.lastName}`
    }
};
console.log(person.fullName());

//porém, há alguns problemas nessa abordagem...
//1 - Não será possível definir ou modificar o nome completo da pessoa do lado de fora do objeto, dará erro

// person.fullName = 'John Smith';
// console.log(person.fullName());

//2 - Não podera ser tratada como uma propriedade ->
console.log(person.fullName) 


// Usando get e set pra resolver isso....

const person3 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    //fullName: function() {}, or...the easiest way:
    get fullName() {   //  Fornece uma maneira conveniente de acessar a propriedade fullName como uma combinação de firstName e lastName.
        return `${this.firstName} ${this.lastName}`
    }, 
    set fullName(value) { // Permite atualizar as propriedades firstName e lastName ao definir a propriedade fullName.
       const parts = value.split(' ');
       this.firstName = parts[0];
       this.lastName = parts[1];
    }

};


console.log(person3.fullName);
person3.fullName = 'John Smith'; // alterando fora do objeto graças ao setter.
console.log(person3.fullName);  // acessando como propriedade graças ao getter.

