<template>
    <div class="body">
        <div class="addPhoto">
            <p class="titleAdd">Добавить фотографию</p>
            <div class="addFile">
                <label class="input-file">
                    <input type="file" name="file" @change="addPhoto" id="uploaded-file">
                    <span  class="input-file-btn">Выберите файл</span>
                </label>
                <span class="input-file-text"></span>
            </div>
            <input class="buttonAdd" type="submit" value="Добавить">
        </div>
        <div class="listMargin"> 
            <div class="listOfPhotos">
                <p class="titleList">Список фотографий</p>
                <p class="titleHint">(Нажмите на фото, чтобы удалить)</p>
                <ul class="gallery" ref="ul">
                    <li :key ="el.id" v-for="el in elements">
                        <img :src=getImgUrl(el.src)>
                    </li>
                </ul>
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    name: 'PhotoGalleryChanges',
    data () {
        return {
            elements: [],
        }
    },
    methods: {
        addPhoto () {
            let file = document.getElementById('uploaded-file').value
            file = file.replace (/\\/g, '/').split ('/').pop ();
            document.querySelector ('.input-file-text').innerHTML = 'Имя файла: ' + file;
        },
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
    },
    created () {
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
/* ADD PHOTO */
.addPhoto {
    margin-left: auto;
    margin-right: auto;
    max-width: 353px;
    text-align: center;
    padding: 10px 123px 30px 123px;
    background-color: #D2B48C;
    border: 15px solid #FFEBCD;
    border-radius: 24px;
}
.titleAdd {
    margin-top: 0;
    margin-bottom: 25px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;
    color: #333232;
}

/* ADD FILE */
.addFile {
    margin-bottom: 40px;
}
.input-file {
	position: relative;
	display: inline-block;
}
.input-file-btn {
	position: relative;
	display: inline-block;
	cursor: pointer;
	outline: none;
	text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 160%;
    color: #333232;
	vertical-align: middle;
	color: #333232;
	text-align: center;
	border-radius: 16px;
	background-color: #FFEBCD;
	padding: 6px 27px 6px 27px;
	box-sizing: border-box;
	border: none;
	margin: 0;
}
.input-file-text {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 160%;
    color: #333232;
	padding: 0 0 0 20px;
	display: inline-block;
}
.input-file input[type=file] {
	position: absolute;
	z-index: -1;
	opacity: 0;
	display: block;
	width: 0;
	height: 0;
}
.input-file:hover .input-file-btn {
	background-color:#333232;
    color: #FFFFFF
}


.buttonAdd {
    padding: 10px 44px 10px 43px;
    background-color: #615B4B;
    border: none;
    border-radius: 16px;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;
    color: #FFFFFF;
}

/* LIST OF PHOTOS */
.listMargin{
    margin: auto;
    padding: 35px 0 123px 0;  
}
.listOfPhotos {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    text-align: center;
    padding: 10px 0 15px 0;
    background-color: #FFEBCD;
    border: 15px solid #D2B48C;
    border-radius: 24px;
}
.titleList {
    margin-top: 0;
    margin-bottom: 0;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;
    color: #333232;
}
.titleHint {
    margin-top: 0;
    margin-bottom: 25px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 160%;
    color: #333232;
}
.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0 79px 0 49px;
    list-style: none;
}
.gallery li img {
    width: 157px;
    height: 157px;
    padding-left: 30px;
    padding-bottom: 15px;
}
</style>