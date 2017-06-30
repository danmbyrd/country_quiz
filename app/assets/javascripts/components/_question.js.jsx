var Question = React.createClass({

  handleChange: function (changeEvent) {
     this.props.saveAnswer({ questionId: this.props.question.id, answerValue: changeEvent.target.value })
  },

  render() {
    var question = this.props.question
    console.log(this.props.question.answers)
    var answers = this.props.question.answers.map( (answer) => {
      return(
        <td className="answer">
          <label>
            <input type="radio" name={question.id} value={answer.order} />
            {answer.text}
          </label>
        </td>
      )
    });

    return( 
      <table className="question_table">
        <tr>
          <h1 className="question">{ question.content } </h1>
        </tr>
        <tr className="answer_list" onChange={this.handleChange}>
          {answers} 
        </tr>
      </table>
    )
  }
});
