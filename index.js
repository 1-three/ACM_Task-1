    gsap.to(".box", {duration: 2, backgroundColor: "black", onComplete: function() {
        var text = "The Association for Computing Machinery is a US-based international learned society for computing. It was founded in 1947 and is the world's largest scientific and educational computing society. The VIT Chennai Student Chapter aims to foster and nurture these beliefs at the college level.";
        var i = 0;
        var typingEffect = setInterval(function() {
            document.getElementById("typing").textContent += text[i];
            i++;
            if (i === text.length) {
                clearInterval(typingEffect);
            }
        }, 50);
    }});

