"use strict";

const paragraphElement = document.querySelector('.lorem');

function mouseOver () {
    paragraphElement.innerHTML += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error voluptates aliquam autem odio nemo. Perspiciatis officia provident, sequi, ut, natus nisi nostrum iure obcaecati minima nesciunt maiores repudiandae exercitationem?Reprehenderit alias amet est placeat architecto suscipit ipsam minus repudiandae quos perferendis recusandae at aperiam rerum doloribus doloremque, fugit vel voluptate fugiat dolore exercitationem aspernatur officiis! Est impedit nesciunt voluptatum!";
}
paragraphElement.addEventListener("mouseover", mouseOver);