'use strict';

const explorer = document.querySelector('#explorer');

let explorerFiles = [];

let url = '../';

updateExplorer(url);

// setInterval(updateExplorer, 2000);

function updateExplorer() {

  const data = new FormData();
  data.set('url', url);

  const request = fetch('core/explorer.php', {
    method: 'POST',
    body: data
  });

  request
    .then(resp => resp.json())
    .then(files => {

      explorer.innerHTML = '';

      files.forEach(fileName => {

        let file = document.createElement('div');
        file.className = 'file';

        let fileImage = document.createElement('img');
        fileImage.className = 'file-image';
        fileImage.src = 'media/img/folder.png';

        let fileTitle = document.createElement('p');
        fileTitle.className = 'file-title';
        fileTitle.textContent = fileName;

        file.append(fileImage, fileTitle);
        explorer.append(file);
      });

      explorerFiles = explorer.querySelectorAll('.file');

      explorerFiles.forEach(explorerFile => {
        explorerFile.addEventListener('click', evt => {
          let folder = explorerFile.querySelector('.file-title').textContent;
          url += folder + '/';
          updateExplorer();
        });
      });

    });

}
