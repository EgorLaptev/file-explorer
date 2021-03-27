'use strict';

const explorer = document.querySelector('#explorer');

let explorerFiles = [];

let url = './';

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

      console.log(files);

      explorer.innerHTML = '';

      files.forEach(fileObject => {

        let file = document.createElement('div');
        file.className = 'file';

        let fileImage = document.createElement('img');
        fileImage.className = 'file-image';

        fileImage.src = (fileObject.type == 'dir') ? 'media/img/folder.png' : 'media/img/file.png';

        let fileTitle = document.createElement('p');
        fileTitle.className = 'file-title';
        fileTitle.textContent = fileObject.name;

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
