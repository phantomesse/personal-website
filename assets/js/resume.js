'use strict';

class Resume {
  constructor() {

  }

  async load() {
    let response = await $.get('resume.html');
    $('#resume .inner').append(response);
  }

}