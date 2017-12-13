import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Submitted_Data } from '../api/submitted_data.js';


import './body.html';

Template.body.helpers({
    submitted_data() {
        // Show newest tasks at the top
        return Submitted_Data.find({}, { sort: { createdAt: -1 } });
    },
});

Template.body.events({
    'submit .new-task'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const text = target.text.value;

        // Insert a task into the collection
        Submitted_Data.insert({
            text,
            createdAt: new Date(), // current time
        });

        // Clear form
        target.text.value = '';
    },
});




