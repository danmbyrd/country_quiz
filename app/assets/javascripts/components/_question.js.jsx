var Question = React.createClass({

  render() {
    var question = this.props.question
    console.log(this.props.question.answers)
    var answers = this.props.question.answers.map( (answer) => {
      return(
        <td class="answer">
          <label>
            <input type="radio" name={answer.id} value={answer.order} />
            {answer.text}
          </label>
        </td>
      )
    });

    return( 
      <div>
      <tr>
        <h1 class="question">{ question.content } </h1>
      </tr>
      <tr class="answer_list">
        {answers} 
      </tr>
      </div>
    )
  }
});
