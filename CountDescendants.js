class Person {
    constructor(name, children = []) {
        this.name = name;
        this.children = children;
    }
}

/*
Write a function that takes a family as parameter and count all descendants.
A family is an array of Person. A Person has a name and children (another array of Person that can be empty | at least one element | undefined).
Thus, a person can have children, that can have children, that can have children, that can have ... You get it.
The function must returns the exact same array, except that each Person's name must be appended by the count of his children.
If he/she has no child, [NONE] must be appended.
Example of a modified name in the family => "Maria [2]" or "Fred [NONE]
*/

function countDescendants() {



}