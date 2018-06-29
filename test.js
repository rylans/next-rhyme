const nextRhyme = require('.');

describe("next-rhyme", () => {
  it("predicts 'dead'", (done)  => {
    const expected = 'dead';
    const ctx = {prev: 'the head', current: 'so drop'};
    assertRhymeResultContains(ctx, expected, done)
  });

});


function assertRhymeResultContains(context, expected, done) {
    nextRhyme.of(context, (result) => {
      if (result.includes(expected)) {
	done()
      } else {
	done(
	  new Error('expected ' + result + ' to include: ' + expected));
      }
    });
}
