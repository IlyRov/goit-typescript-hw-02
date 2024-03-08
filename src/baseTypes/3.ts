let some: unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {
    str = some;
} else {
    console.log("The type of 'some' is not string.");
}
