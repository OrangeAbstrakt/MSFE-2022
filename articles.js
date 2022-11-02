let articles = [
	{
		image: "assets/imgs/img-1.jpg",
		title: "Test Article",
		preview: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
		body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cupiditate corporis exercitationem enim sint dolorem dolores commodi aliquam soluta obcaecati maxime pariatur molestias ut? Nulla officiis nobis qui accusantium ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aliquid quae nemo aliquam, omnis earum, velit quia possimus incidunt similique? Eaque quos facilis repudiandae, aperiam itaque illum cumque accusantium.`,
	},
	{
		image: "assets/imgs/img-1.jpg",
		title: "Test Article",
		preview: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
		body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cupiditate corporis exercitationem enim sint dolorem dolores commodi aliquam soluta obcaecati maxime pariatur molestias ut? Nulla officiis nobis qui accusantium ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aliquid quae nemo aliquam, omnis earum, velit quia possimus incidunt similique? Eaque quos facilis repudiandae, aperiam itaque illum cumque accusantium.`,
	},
	{
		image: "assets/imgs/img-1.jpg",
		title: "Test Article",
		preview: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
		body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cupiditate corporis exercitationem enim sint dolorem dolores commodi aliquam soluta obcaecati maxime pariatur molestias ut? Nulla officiis nobis qui accusantium ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aliquid quae nemo aliquam, omnis earum, velit quia possimus incidunt similique? Eaque quos facilis repudiandae, aperiam itaque illum cumque accusantium.`,
	},
	{
		image: "assets/imgs/img-1.jpg",
		title: "Test Article",
		preview: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
		body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cupiditate corporis exercitationem enim sint dolorem dolores commodi aliquam soluta obcaecati maxime pariatur molestias ut? Nulla officiis nobis qui accusantium ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aliquid quae nemo aliquam, omnis earum, velit quia possimus incidunt similique? Eaque quos facilis repudiandae, aperiam itaque illum cumque accusantium.`,
	},
	{
		image: "assets/imgs/img-1.jpg",
		title: "Test Article",
		preview: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
		body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cupiditate corporis exercitationem enim sint dolorem dolores commodi aliquam soluta obcaecati maxime pariatur molestias ut? Nulla officiis nobis qui accusantium ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aliquid quae nemo aliquam, omnis earum, velit quia possimus incidunt similique? Eaque quos facilis repudiandae, aperiam itaque illum cumque accusantium.`,
	},
	{
		image: "assets/imgs/img-1.jpg",
		title: "Test Article",
		preview: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
		body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cupiditate corporis exercitationem enim sint dolorem dolores commodi aliquam soluta obcaecati maxime pariatur molestias ut? Nulla officiis nobis qui accusantium ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aliquid quae nemo aliquam, omnis earum, velit quia possimus incidunt similique? Eaque quos facilis repudiandae, aperiam itaque illum cumque accusantium.`,
	},
	{
		image: "assets/imgs/img-1.jpg",
		title: "Test Article",
		preview: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
		body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cupiditate corporis exercitationem enim sint dolorem dolores commodi aliquam soluta obcaecati maxime pariatur molestias ut? Nulla officiis nobis qui accusantium ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aliquid quae nemo aliquam, omnis earum, velit quia possimus incidunt similique? Eaque quos facilis repudiandae, aperiam itaque illum cumque accusantium.`,
	},
	{
		image: "assets/imgs/img-1.jpg",
		title: "Test Article",
		preview: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
		body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cupiditate corporis exercitationem enim sint dolorem dolores commodi aliquam soluta obcaecati maxime pariatur molestias ut? Nulla officiis nobis qui accusantium ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aliquid quae nemo aliquam, omnis earum, velit quia possimus incidunt similique? Eaque quos facilis repudiandae, aperiam itaque illum cumque accusantium.`,
	},
	{
		image: "assets/imgs/img-1.jpg",
		title: "Test Article",
		preview: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
		body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cupiditate corporis exercitationem enim sint dolorem dolores commodi aliquam soluta obcaecati maxime pariatur molestias ut? Nulla officiis nobis qui accusantium ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aliquid quae nemo aliquam, omnis earum, velit quia possimus incidunt similique? Eaque quos facilis repudiandae, aperiam itaque illum cumque accusantium.`,
	},

];

function createArticleCard(image, title, index, preview) {
	return `
                <a href="#" class="overlay-img" id="article-card">
                    <img src="${image}">
                    <div class="overlay"></div>
                    <div class="des">
                        <h1 class="title">Article ${index}</h1>
                        <h6 class="subtitle">${title}</p>
                        <p>${preview}</p>
                    </div>
                </a>`;
}

articles.forEach((article) => {
	let articleCardHTML = createArticleCard(
		article.image,
		article.title,
		articles.indexOf(article) + 1,
		article.preview
	);
	let div = document.createElement("div");
	div.classList.add("col-md-4");
	div.innerHTML = articleCardHTML;
    div.id = "article-card";
	document.getElementById("articles-div").appendChild(div);
});

var modal = document.getElementById("myModal");

var btns = document.querySelectorAll("[id=article-card]");
console.log(btns)
var spans = document.getElementsByClassName("close1");

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
		modal.style.display = "block";
        document.getElementById("modh2").innerHTML = articles[i].title
        document.getElementById("modp").innerHTML = articles[i].body
	};
}

for (var i = 0; i < spans.length; i++) {
	spans[i].onclick = function () {
		modal.style.display = "none";
	};
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
