(function() {
  datamuse = require('datamuse');
  
  module.exports.of = (context, callback) => {
    const prevLine = context.prev;
    const lastWordPrevLine = prevLine.split(' ').pop();

    const thisLine = context.current;
    const lastWordThisLine = thisLine.split(' ').pop();

    next(lastWordThisLine, (nextJson) => {
      rhyme(lastWordPrevLine, (rhymeJson) => {
	let allRhymes = [];
	let nextRhymes = [];

	for (j = 0; j < rhymeJson.length; j++) {
	  allRhymes.push(rhymeJson[j].word);
	  for (i = 0; i < nextJson.length; i++) {
	    if (rhymeJson[j].word === nextJson[i].word) {
	      nextRhymes.push(nextJson[i].word);
	    }
	  }
	}

	if (nextRhymes.length < 1) {
	  callback(allRhymes);
	} else {
	  callback(nextRhymes);
	}
      });
    });
  }

  function next(q, f) {
    datamuse.request('words?lc='+q).then(f);
  }

  function rhyme(q, f) {
    datamuse.request('words?rel_rhy=' + q).then(f);
  }

})();
