<template>
    <div class="body">
        <router-link to="/photoGalleryChanges">
            <button class="add_delete">Добавить / Удалить фотографию </button>
        </router-link>

        <p><img id="largePhoto" :src=getImgUrl(large.src) alt="large Photo"></p>
        <div id="carousel_of_images" class="carousel_of_images">
            <button class="arrow prev" @click = "prevPhoto">&lt;</button>
            <div class="gallery">
                <ul id="gallery" ref="ul" :style="{marginLeft: mar}">
                    <li :key ="el.id" v-for="el in elements"  @click = "photoMagnification(el)">
                        <img :src=getImgUrl(el.src)>
                    </li>
                </ul>
            </div>
            <button class="arrow next" @click = "nextPhoto">></button>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'PhotoGallery',
    data () {
        return {
            elements: [],
            large: {},
            width: 197,
            count: 1,
            position: 0,
            mar: 0,
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
        photoMagnification (e) {
            this.large.src = e.src
        },
        prevPhoto () {
            this.position += this.width * this.count;
            this.position = Math.min(this.position, 0)
            this.mar= this.position + 'px';
        },
        nextPhoto () {
            this.position -= this.width * this.count;
            this.position = Math.max(this.position, -this.width * (this.elements.length - this.count*5));
            this.mar = this.position + 'px';
        }
    },
    created () {
        this.large = {
            src: "Photo_PhotoGallery/photoGallery_2.png"
        },
        this.elements = [
            {
                src: 'Photo_PhotoGallery/photoGallery_1.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_2.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_3.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_4.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_5.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_6.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_7.png'
            },
            {
                src: 'Photo_PhotoGallery/photoGallery_8.png'
            },
        ]
    }
} 
</script>


<style scoped>
.body {
    margin: 0;
    padding-top: 145px;
    padding-left: 0;
    padding-right: 0;
    background-color: #333232;
}

#largePhoto {
    width: 480px;
    height: 390px;
    border: 15px solid #D2B48C;
    border-radius: 24px;
    vertical-align: top;
}
p {
    margin: 0;
    text-align: center;
}
.carousel_of_images {
    position: relative;
    margin: auto;
    padding: 10px 87px 123px 87px;
    width: 985px;
}
.carousel_of_images img {
    width: 157px;
    height: 157px;
    display: block;
}

.arrow {
    display: block;
    position: absolute;
    top: 65px;
    background-color: #D2B48C;
    border-radius: 16px;
    font-size: 55px;
    color: #333232;
    padding: 0 17px 0 17px;
    border: 0;
}
.arrow:hover {
    cursor: pointer;
    background-color: #615B4B;
}
.prev {
    left: 0px;
}
.next {
    right: 0px;
}
.gallery {
    width: 985px;
    overflow: hidden;
    margin: 0;
}
.gallery ul {
    width: 9999px;
    height: 157px;
    margin: 0;
    padding: 0;
    list-style: none;
    transition: margin-left 250ms;
    font-size: 0;
}
.gallery li {
    display: inline-block;
    margin: 0 20px 0 20px;
}

.add_delete {
    max-width: 250px;
    width: 100%;
    position: absolute;
    top: 315px;
    left: 925px;
    right: 0;
    text-align: center;
    margin: auto;
    padding: 11px 34px 11px 34px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
    background-color: #FFEBCD;
    border: none;
    border-radius: 16px;
}


@media (max-width:1399.98px) {
    #largePhoto {
        width: 420px;
        height: 330px;
    }
    .carousel_of_images {
        padding: 10px 80px 123px 80px;
        width: 700px;
    }
    .carousel_of_images img {
        width: 130px;
        height: 130px;
    }

    .arrow {
        top: 51px;
        font-size: 45px;
    }

    .gallery {
        width: 700px;
    }
    .gallery ul {
        height: 130px;
    }
    .gallery li {
        margin: 0 5px 0 5px;
    }

    .add_delete {
        max-width: 176px;
        top: 292px;
        left: 654px;
        padding: 7px;
        font-size: 16px;
    }
}


@media (max-width: 899.98px) {
    #largePhoto {
        width: 370px;
        height: 280px;
        border: 10px solid #D2B48C;
    }
    .carousel_of_images {
        padding: 10px 60px 123px 60px;
        width: 468px;
    }
    .carousel_of_images img {
        width: 90px;
        height: 90px;
    }

    .arrow {
        top: 36px;
        font-size: 35px;
        padding: 0 12px 0 12px;
    }
    .gallery {
        width: 468px;
    }
    .gallery ul {
        height: 90px;
    }
    .gallery li {
        margin: 0 2px 0 2px;
    }

    .add_delete {
        max-width: 84px;
        top: 261px;
        left: 485px;
        padding: 5px 2px;
        font-size: 12px;
    }
}
</style>