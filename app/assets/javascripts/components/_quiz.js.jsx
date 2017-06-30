var Quiz = React.createClass({
   getInitialState() {
     return { questions: [] } 
   },
   
  componentDidMount() {
    console.log("Mounted!!")
    this.setState({ questions: [{
      id: 1, content: "Hello?", answers: [{ id: 2, text: "Hi", order: 1}]
    }]})
    //$.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  },

  getInitialState() { return { questions: [] } },


  render() {
    var questions = this.state.questions.map( (q) => {
     return ( 
        <Question question={q} />
     ) });

    return( 
      <form>
        <table class="question_table">
          {questions}
        </table>
        <div class="button_div">
          <button type="button" class="answer">Submit</button>
        </div>
      </form>
    )
  }
});
