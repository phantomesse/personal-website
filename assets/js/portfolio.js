'use strict';

class Portfolio {
  constructor() {
    this.pieces = [];
  }

  load() {
    let self = this;
    $.get('portfolio.html', function (response) {
      $('#portfolio .inner').append(response);
      self._onLoad();
    });
  }

  _onLoad() {
    $('.thumbnail').click(function (event) {
      event.preventDefault();
      Portfolio._loadPiece($(this).attr('href').substr(1));
    });
  }

  static async _loadPiece(pieceName) {
    console.log(pieceName);
    let response = await $.get(`portfolio/${pieceName}.html`);
    console.log(title);
  }
}

class Piece {
  constructor() {
    this.title = title;
  }
}