// @ts-nocheck

/* BASIC DATA STRUCTURES IN DART */

// the dart:core library contains the core components of the Dart language
// inside, you’ll find a variety of tools and types to help create your Dart apps
// before you start building your own custom data structures
// it’s important to understand the primary data structures that come with Dart
// this chapter will focus on the three main data structures
// that the dart:core library provides right out of the box: List, Map, and Set

/* LIST */

// a list is a general-purpose, generic container for storing an ordered collection of elements
// and it’s used commonly in all sorts of Dart programs
// in many other programming languages, this data type is called an array
// you can create a list by using a list literal
// which is a comma-separated list of values surrounded with square brackets
// for example:
const people: string[] = ["John", "Mary", "Alice"];

// List, like most other Dart collections, is an Iterable
// this means that you can step through the elements sequentially
// all iterables have a length getter that returns the number of elements in the collection
// while this could take O(n) time for iterables that need to count every element
// List will efficiently return length in O(1) time
// Dart lists can also be growable or fixed-length
// when you specify a fixed length for the list
// Dart can be more efficient about the space it allocates
// however, you won’t be able to add or remove elements anymore
// as you could in a growable list
// as with any data structure, there are certain notable traits that you should be aware of
// the first of these is the notion of order

/* MAP */

// a map is collection that holds key-value pairs
// for example, here’s a map containing users’ names and scores:
// final scores = {'Eric': 9, 'Mark': 12, 'Wayne': 1};
const scores: Record<string, number> = { Eric: 9, Mark: 12, Wayne: 1 };

// the abstract Map class itself in Dart doesn’t have any guarantees of order
// nor can you insert at a specific index
// the keys of a map can be of any type
