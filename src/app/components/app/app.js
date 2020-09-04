import Component from './component.html'
export let name;
let other = 'stringo';
setTimeout(() => other = 'other wolf', 2000);

$: console.log(other)