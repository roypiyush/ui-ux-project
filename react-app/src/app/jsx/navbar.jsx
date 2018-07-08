import React from 'react';
import $ from 'jquery';


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialize_hide_show();
  }

  initialize_hide_show() {
    this.props.bars.map((b) => {
      var ref = '#' + b.id;
      if (b.className) {
        $(ref).addClass('active');
        $(ref).show();
      }
      else {
        $(ref).hide();
      }

      var href = '[href=\'' + ref + '\']'
      $(href).click(function() {
        $('.active').hide();
        $('.active').removeClass();
        $(ref).addClass('active');
        $(ref).show();
      });
    });
  }

  render() {
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">{this.props.name}</a>
          </div>
          <ul class="nav navbar-nav">
          {
            this.props.bars.map((b) => <li><a href={"#" + b.id}>{b.name}</a></li>)
          }
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavigationBar;
