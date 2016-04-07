
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './toworksList.html';

class ToworksListCtrl {
    constructor() {
        this.works = [{
            text: 'This is task 1'
        }, {
            text: 'This is task 2'
        }, {
            text: 'This is task 3'
        }];
    }
}

export default angular.module('toworksList', [
        angularMeteor
    ])
    .component('toworksList', {
        templateUrl: 'imports/components/todosList/toworksList.html',
        controller: ToworksListCtrl
    });