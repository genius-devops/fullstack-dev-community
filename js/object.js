        /**
         * An object is a special data type that allows you to store more than one value, just like an array.
         * The difference between an object and an array is that an array stores data as a list of items, 
         * while an object stores data in a key:value pair format.
         * When you use regular variables, it would look like this:
         * While it works fine, it certainly isn't the best way to store related values.
         * 
        */
        let bookTitle = "JavaScript Introduction";
        let bookAuthor = "Nathan Sebhastian";

        // Another way to store the value would be to use an array:
        var myBook = ["JavaScript Introduction", "Nathan Sebhastian"];
        
        // using js object
        let myBook = {
        title: "JavaScript Introduction",
        author: "Nathan Sebhastian",
        };

        // An object item is also known as a property, with the key as property name and value as property value.
        let myBook = {
        title: "JavaScript Introduction",
        author: "Nathan Sebhastian",
        describe: function () {
        console.log(`Book title: ${this.title}`);
        console.log(`Book author: ${this.author}`);
        },
        };

        // accessing object property using dot (.) notation
        console.log(myBook.title);
        console.log(myBook.author);

        /**
         * using bracket 
         * Keep in mind that you need to wrap the property name in quotes like a string, 
         * or JavaScript will think you're passing a variable inside the square brackets.
        */
        console.log(myBook["title"]);
        console.log(myBook["author"]);

        // add release year property
        myBook.year = 2023;

        // add publisher property
        myBook["publisher"] = "CodeWithNathan";

        console.log(myBook);

        /**When you print the object, here's the result:
         * {
         * title: 'JavaScript Introduction',
         * author: 'Nathan Sebhastian',
         * year: 2023,
         * publisher: 'CodeWithNathan'
         * }
        */
        
        // change the author property
        myBook.author = "John Doe";
        console.log(myBook);
        
        // deleting object property
        delete myBook.author;
        console.log(myBook);
        
        // How to check if a property exists in an object
        // check if firstName exists
        console.log('firstName' in person); // true
        // check if age exists
        console.log('age' in person); // false
        
        /**
         * Exercise #8
Create a person object with the following properties:
name - the person's name
age - the person's age
greet() - a function to greet another person
Inside the greet() function, introduce the person, specifying the name and the age.
Here's an example output:
person.greet();
Hello! My name is Alex and I'm 22 years old.
         */

let myProfile = {
	name: 'Adamu',
	age: 18,
	isMaried: false,
	hobbies: ['coding', 'cooking', 'hiking', 'planting']
}

