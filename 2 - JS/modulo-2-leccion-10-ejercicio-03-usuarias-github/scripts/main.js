'use strict';
const btn = document.querySelector('.js-btn');
const userElement = document.querySelector('.js-user-result');
const nameElement = document.querySelector('.js-name-result');
const urlElement = document.querySelector('.js-url-result');
const img = document.querySelector('.js-img');
const repoElement = document.querySelector('.js-repo-result');
const inputElement = document.querySelector('.js-input');
const followersElement = document.querySelector('.js-followers-result');
const followingElement = document.querySelector('.js-following-result');

function getGitHubUser() {
	const userName = inputElement.value;

	fetch(`https://api.github.com/users/${userName}`)
		.then((response) => response.json())
		.then((data) => {
			userElement.innerHTML = data.login + '.';
			nameElement.innerHTML = data.name + '.';
			urlElement.innerHTML = data.html_url;
			urlElement.href = data.html_url;
			urlElement.target = '_blank';
			img.src = data.avatar_url;
			img.alt = 'Avatar';
			repoElement.innerHTML = data.public_repos + '.';
			followersElement.innerHTML = data.followers + '.';
			followingElement.innerHTML = data.following + '.';
			console.log(data);
			console.log(data.public_repos);
		});
}

btn.addEventListener('click', getGitHubUser);
