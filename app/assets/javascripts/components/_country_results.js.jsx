var CountryMatches = React.createClass({

  render() {
    return(
      <div className="matches" >
        { JSON.stringify(this.props.countryMatches) }
      </div>
    )
  }

});
