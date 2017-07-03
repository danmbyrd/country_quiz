var Quiz = React.createClass({

   getInitialState() {
     return { questions: [], questionAnswers: {}, countryMatches: []} 
   },
   
  componentDidMount() {
    console.log("Mounted!!")
    $.getJSON('/api/v1/questions.json', (response) => { this.setState({ questions: response }) });
  },

  saveAnswer: function(answer) {
    var newQuestionAnswers = this.state.questionAnswers
    newQuestionAnswers[answer.questionId] = answer.answerValue
    this.setState({ questionAnswers: newQuestionAnswers }) 
    console.log("question answers: " + JSON.stringify(this.state.questionAnswers));
  },

  provideMatches: function() {
   //var fetchedMatches = [ { name: "Germany",  score: 0.9 }, { name: "Croatia",  score: 0.5 } ]
   var fetchedMatches = $.getJSON('/api/v1/country_matches.json', this.state.questionAnswers, (response) =>
     { this.setState({ countryMatches: response }) }) 
       
    console.log("Country matches: " + JSON.stringify(this.state.countryMatches));
  },

  render() {
    var questions = this.state.questions.map( (q) => {
     return ( 
        <Question question={q} saveAnswer={this.saveAnswer} />
     ) });

    return( 
     <div className="centered">
        {questions}
        <div className="button_div">
          <button type="button" className="answer" onClick={this.provideMatches}>Submit</button>
        </div>
        { this.state.countryMatches.length > 0 && <CountryMatches countryMatches={this.state.countryMatches} /> }
     </div>
    )
  }
});
