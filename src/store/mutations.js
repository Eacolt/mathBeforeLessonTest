/**
 * 将currentLevel指向下一关，初始化下一关question相关数据
 * @param state
 */
export const nextLevel = state => {
  if (state.currentLevel + 1 >= state.totalLevel) {
    return;
  }

  state.currentLevel++;
  state.currentQuestion = 0;
  state.totalQuestion = state.levels[state.currentLevel].questions.length;

}

export const nextQuestion = state => {

  if (state.currentQuestion + 1 >= state.totalQuestion) {
    return;
  }
  state.currentQuestion++;
}


/**
 * 当前关卡评级
 * @param state
 */
const currentLevelRank = (state) => {
  if (!state.userAnswers[state.currentLevel]) return;
  let answers = state.userAnswers[state.currentLevel];
  let getedScore = 0;
  let rate;
  //求得分的总数：gettedScore;
  answers.forEach(value => {
    getedScore += value.score;
  })
  //@rate:当前得分除以总分（每道题得分与总问题数量的积），所求得的分数百分比
  rate = getedScore / (state.totalQuestion * state.scoreEveryQuestion);
  if (rate>=0 && rate <= 0.1) {
    return {rank: "D", rate}
  }
  if (rate>0.1 && rate <= 0.7) {
    return {rank: "C", rate}
  }
  if (rate>0.7 && rate <= 0.85) {
    return {rank: "B", rate}
  }
  if (rate>0.85 && rate <= 0.9) {
    return {rank: 'A', rate}
  }
  if(rate>0.9){
      return {rank: 'A+', rate};
  }
  // if(rate){
  //
  // }

}
/**
 * 检测当前回答是否正确
 * @param state
 * @param userAnswer
 * @param callback
 * @return {boolean|*}
 */
const check = (state, userAnswer) => {
  //当前问题的正确答案
  const correct = state.levels[state.currentLevel].questions[state.currentQuestion].answerIndex.concat();
  const result = _.difference(correct, userAnswer);

  return !result || (_.isArray(result) && result.length === 0);

}
/**
 * 答对
 *  35s->100%
 *  60s->90%
 *  120s->70%
 *  >120s->50%
 * 答错，0分
 */
const getRate = (passedTime, answerTime) => {
  if (passedTime < 35) {
    return 1;
  }
  if (passedTime < 60 && passedTime>=35) {
    return 0.9
  }
  if (passedTime < 120 && passedTime>=60) {
    return 0.7
  }
  if (passedTime >= answerTime) {
    return 0.5;
  }
}

export const submitUserAnswer = (state, {userAnswer, passedTime}) => {
  let level = state.currentLevel;
  let question = state.currentQuestion;
  let userAnswers = state.userAnswers;
  let score = 0;

  if (check(state, userAnswer)) {

    //分数
    score = state.scoreEveryQuestion * getRate(passedTime, state.answerTime);
  }
  if (!userAnswers[level]) {
    userAnswers[level] = [];
  }
  userAnswers[level][question] = {score, userAnswer};
  state.userAnswers = state.userAnswers.concat();

  //通关，计算评级
  if (state.currentQuestion === state.totalQuestion - 1) {
    state.levelRanks[state.currentLevel] = currentLevelRank(state);
    state.levelRanks = state.levelRanks.concat();
  }
}
