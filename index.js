const Realm = require('realm');

const PersonSchema = {
    name: 'Person',
    properties: {
        name: 'string',
        dog: 'Dog',
    }
}

const DogSchema = {
    name: 'Dog',
    properties: {
        name: 'string',
        owners: {type: 'linkingObjects', objectType: 'Person', property: 'dog'},
    }
};

const realm = new Realm({
    schema: [PersonSchema, DogSchema]
});

realm.write(() => {
    realm.delete(realm.objects('Person'));
    realm.delete(realm.objects('Dog'));
});

realm.write(() => {
    realm.create('Person', {
        name: "test",
        dog: realm.create('Dog', {
            name: 'harry'
        })
    });
});

const persons = realm.objects('Person');

debugger; // Inspect the object

// Infinity Recursion

console.log(JSON.stringify(persons.slice()));