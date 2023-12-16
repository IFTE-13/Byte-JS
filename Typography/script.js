const text = 'JavaScript is the most popular programming language...!'

let index = 0;

function write() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length - 1) {
        index = 0
    }
}

setInterval(write, 100);