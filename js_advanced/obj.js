const objOne = {
    topic: 'javascript',
    fat: true
}

// accessing the properties of obj with . or []
objOne.topic;
objOne['topic']

objOne.fat;
objOne['fat']

// creating new properties using . oor []
objOne.author = 'branden';
objOne['year'] = 1995;

objOne.contactInfo = {};

// arrrays and obj can hold other array and objs
var data = {
    trial1:[[1,2], [3,4]],
    trial2:[[2,3], [4,5]]
};
