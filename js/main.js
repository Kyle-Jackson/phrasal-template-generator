var makeastory = alert('Let’s make a story together!');

var colour = prompt('A colour (orange, indigo, etc.)');

var creature = prompt('A creature (dragon, moth, etc.)');

var adjective =  prompt('An adjective (beautiful, super, etc.)');

var verb = prompt('A past tense verb (ran, burped, etc.)');

var story = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning\nEnter the letter below:');

if (story == 'a') {
  document.write(adjective + ' After snacking on treats, the ' + colour + ' bellied ' + creature + ' ' + verb + ' for hours.');
}

if (story == 'b') {
  document.write(' Ameilia ' + verb + ' through the ' + adjective + ' ' + color + ' nebula escaping the space ' + creature + '.');
}

if (story == 'c') {
  document.write(' Jackson chose his ' + adjective + ' , ' + colour + ' ' + creature + ' card and ' + verb + ' it to the table knowing he won. ');
}
