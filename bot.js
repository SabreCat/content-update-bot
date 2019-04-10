const friendlyWords = require('friendly-words');
const tracery = require('tracery-grammar');
const config = require('./config.json');
const Twit = require('twit');

const bot = new Twit(config);

const habiticaContentGrammar = tracery.createGrammar({
  object: friendlyWords.objects,
  predicate: friendlyWords.predicates,
  bundleAnnouncement: 'A new discount quest bundle has been released! Check out the #predicate.capitalize# #object.capitalize.s# Quest Bundle and get the #object#, #object#, and #object# Quests, all for seven Gems!',
  hatchingPotionAnnouncement: 'There’s a new Magic Hatching Potion in the Market: the #predicate.capitalize# Hatching Potion! Pour one on any standard pet egg to add some #predicate# to your Stable.',
  subscriberSetAnnouncement: 'The latest Subscriber Mystery Set has been revealed! Subscribe now and get the #predicate.capitalize# #object.capitalize# Set, before it’s too late!',
  petQuestAnnouncement: 'A new pet quest is here: “The #predicate.capitalize# #object.capitalize#!” Complete the quest to earn some #predicate# #object# eggs for your collection.',
  backgroundsAnnouncement: 'Three more Backgrounds are now available! Now your avatar can visit the #predicate.capitalize# #object.capitalize#, the #predicate.capitalize# #object.capitalize#, and the #predicate.capitalize# #object.capitalize#.'
});

habiticaContentGrammar.addModifiers(tracery.baseEngModifiers);

const storyModelSelection = Math.random();

let story = '';

if (storyModelSelection < 0.2) {
  story = habiticaContentGrammar.flatten('#bundleAnnouncement#');
} else if (storyModelSelection < 0.4) {
  story = habiticaContentGrammar.flatten('#hatchingPotionAnnouncement#');
} else if (storyModelSelection < 0.6) {
  story = habiticaContentGrammar.flatten('#subscriberSetAnnouncement#');
} else if (storyModelSelection < 0.8) {
  story = habiticaContentGrammar.flatten('#petQuestAnnouncement#');
} else {
  story = habiticaContentGrammar.flatten('#backgroundsAnnouncement#');
}

bot.post('statuses/update', { status: story }, function (err, data, response) {
  console.log(data);
});
