const app = new Vue(
    {
        el: '#app',
        data: {
            activeImage: 0,
            hasAutoPlay: null,
            carouselImages: [
                {
                    name: 'Immagine random 1',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                    source: 'https://picsum.photos/id/0/5616/3744',
                },
                {
                    name: 'Immagine random 2',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                    source: 'https://picsum.photos/id/2/5616/3744',
                },
                {
                    name: 'Immagine random 3',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                    source: 'https://picsum.photos/id/3/5616/3744',
                },
                {
                    name: 'Immagine random 4',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                    source: 'https://picsum.photos/id/4/5616/3744',
                },
                {
                    name: 'Immagine random 5',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                    source: 'https://picsum.photos/id/1/5616/3744',
                },
            ],
        },
        methods: {
            previousImage: function(){
                if(this.activeImage === 0){
                    this.activeImage = this.carouselImages.length - 1;
                } else{
                    this.activeImage--;
                }
            },
            nextImage: function(){
                if (this.activeImage === this.carouselImages.length - 1){
                    this.activeImage = 0;
                } else{
                    this.activeImage++;
                }
            },
            autoPlay: function(){
                console.warn('parto con l\'autoPlay');
                this.hasAutoPlay = setInterval( () => {
                    this.nextImage();
                }, 3000);
            },
            stopAutoPlay: function(){
                clearInterval(this.hasAutoPlay);
                console.warn('ok, mi fermo!');
            },
            focusImage: function(indexImage){
                this.activeImage = indexImage;
            }
        }
    }
);