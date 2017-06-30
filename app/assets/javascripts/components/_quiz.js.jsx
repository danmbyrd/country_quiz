var Quiz = React.createClass({

   getInitialState() {
     return { questions: [], questionAnswers: {}} 
   },
   
  componentDidMount() {
    console.log("Mounted!!")
    $.getJSON('/api/v1/questions.json', (response) => { this.setState({ questions: response }) });
  },

  saveAnswer: function(answer) {
    this.state.questionAnswers[answer.questionId] = answer.answerValue
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
          <button type="button" className="answer">Submit</button>
        </div>
     </div>
    )
  }
});
