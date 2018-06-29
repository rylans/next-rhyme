const nextRhyme = require('.');

describe("next-rhyme", () => {
  it("predicts 'dead'", (done)  => {
    const expected = 'dead';
    const ctx = {prev: 'the head', current: 'so drop'};
    assertRhymeResultContains(ctx, expected, done)
  });

  it("predicts 'ice'", (done) => {
    const expected = 'ice'
    const ctx = {prev: 'and rice', current: 'on thin'};
    assertRhymeResultContains(ctx, expected, done)
  });

  it("completes lyric with 'grip'", (done) => {
    const expected = 'grip'
    const ctx = {prev: 'the hips as I dip', current: 'get a tight'};
    assertRhymeResultContains(ctx, expected, done)
  });

  it("completes lyric with 'side'", (done) => {
    const expected = 'side'
    const ctx = {prev: "when it's time to ride", current: 'I was tha first off this'};
    assertRhymeResultContains(ctx, expected, done)
  });

  it("throws error given empty context", (done) => {
    try {
      nextRhyme.of({}, (result) => {
	done(new Error('Expected failure'));
      });
    } catch (e) {
      done();
    }
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
