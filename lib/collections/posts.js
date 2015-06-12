Posts = new Mongo.Collection('posts'); // not using var because it's a global scope, the client creates a subset in-browser cache of data
