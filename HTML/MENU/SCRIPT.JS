const $links = document.querySelectorAll('.menu li a');
const $indicator = document.querySelectorAll('.menu .indicator');

for (let i=0; i < $links.length; i++){
    $links[i].addEventListener(
        'click',
        () => {
            $links.forEach(($links) =>{
                $links.classList.remove
                ('active');
            });
            $links[i]
            .classList
            .add('active');
            $indicator
                .style
                .left = `${i * 50 + 20}px`;

        }
    );
}