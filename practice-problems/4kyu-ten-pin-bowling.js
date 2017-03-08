// Ten Pin Bowling

const bowlingScore = (frames) => {
  const frameTokens = frames.split(' ').map(token => token.split(''));
  let totalScore = [];

  totalScore.push(score10(frameTokens[9]));

  for (let currFrameIdx = 8; currFrameIdx >= 0; currFrameIdx--) {
    totalScore.push(scoreFrame(frameTokens, currFrameIdx));
  }

  return totalScore.reduce((prev, next) => prev + next, 0);
};

function scoreFrame (frameTokens, currFrameIdx) {
  let score;
  if (frameTokens[currFrameIdx].indexOf('X') !== -1) {
    if (frameTokens[currFrameIdx + 1].indexOf('/') !== -1) {
      score = 20;
    } else {
      score = 10 +
      scoreMove(frameTokens, currFrameIdx + 1, false) +
      scoreMove(frameTokens, currFrameIdx + 1, true);
    }
  } else if (frameTokens[currFrameIdx].indexOf('/') !== -1) {
    score = 10 + scoreMove(frameTokens, currFrameIdx + 1, false);
  } else {
    score = frameTokens[currFrameIdx].reduce((prev, next) => prev + +next, 0);
  }
  return score;
}

function scoreMove (frameTokens, currFrameIdx, offset = false) {
  let score;
  if (currFrameIdx === 9) {
    if (offset) {
      return score10([frameTokens[currFrameIdx][1]]);
    } else {
      return score10([frameTokens[currFrameIdx][0]]);
    }
  }

  if (offset) {
    if (frameTokens[currFrameIdx].indexOf('X') !== -1) {
      return scoreMove(frameTokens, currFrameIdx + 1, false);
    } else if (frameTokens[currFrameIdx].indexOf('/') !== -1) {
      return 10;
    } else {
      return +frameTokens[currFrameIdx][1];
    }
  }

  if (frameTokens[currFrameIdx].indexOf('X') !== -1) {
    return 10;
  } else {
    return +frameTokens[currFrameIdx][0];
  }
}

// score 10th
function score10 (token) {
  return token.reduce((prev, next) => {
    if (next === 'X') return prev + 10;
    else if (next === '/') return 10;
    else return prev + +next;
  }, 0);
}
