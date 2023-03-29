<template>
    <div class="body">
        <div class="addProduct">
            <p class="titleAdd">Добавить товар (блюдо)</p>
            <div class="addFile">
                <label class="input-file">
                    <input type="file" name="file" @change="addProduct" id="uploaded-file">
                    <span  class="input-file-btn">Выберите файл</span>
                </label>
                <span class="input-file-text"></span>
            </div>
            <p class="subtitle">Название:</p>
            <input class="fill" type="text" size="30" maxlength="40" value="">
            <p class="subtitle">Цена:</p>
            <input class="fill" type="text" size="30" maxlength="40" value="">
            <p class="subtitle">Вес:</p>
            <input class="fill" type="tel" size="30" maxlength="40" value="">
            <p class="subtitle">Состав:</p>
            <textarea class="fill" cols="32" rows="3"></textarea>
            <p class="subtitle">Калорийность:</p>
            <input class="fill" type="text" size="30" maxlength="40" value="">
            <div class="button">
                <input class="buttonAdd" type="submit" value="Добавить">
            </div>
        </div>
        <div class="editProduct">
            <p class="titleEdit">Изменить товар (блюдо)</p>
            <table class="editProductTable">
                <thead class="editTableHead">
                    <tr>
                        <th>Фото</th>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Описание</th>
                        <th>Сохранить изменения</th>
                    </tr>
                </thead>
                <tbody class="editTableBody">
                    <tr v-for="card in cards" :key="card.id" class="info">
                        <td class="photo"><img :src=getImgUrl(card.src)></td>
                        <td class="productName">{{ card.title }}</td>
                        <td class="price">{{ card.price }}</td>
                        <td class="description">
                            <li v-for="(value, name) in card.description">
                                <span class='description_key'>{{name }}:</span> {{ value }}
                            </li>
                        </td>
                        <td class="saveChanges"><p>+</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuChanges',
    data () {
        return {
            cards: []
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
        addProduct () {
            let file = document.getElementById('uploaded-file').value
            file = file.replace (/\\/g, '/').split ('/').pop ();
            document.querySelector ('.input-file-text').innerHTML = 'Имя файла: ' + file;
        },
    },
    created () {
        this.cards = [
            {
                id: '1',
                src: 'Photo_Menu/gingerCookies.png',
                title: 'Печенье имбирное домашнее',
                price: '250 руб',
                description: {
                    Вес: '200г',
                    Состав: 'мёд, имбирь, корица, какао, апельсиновая цедра, сахар, лимонный сок, сливочное масло, мука, яйца, разрыхлитель, ванилин',
                    Каллорийность: '820ккал'
                }
            },
            {
                id: '2',
                src: 'Photo_Menu/curlyCookies.png',
                title: 'Печенье фигурное сладкое',
                price: '150 руб',
                description: {
                    Вес: '200г',
                    Состав: 'сливочное масло, мука, яйца, разрыхлитель, ванилин, сахар, какао',
                    Каллорийность: '820ккал'
                }
            },
            {
                id: '3',
                src: 'Photo_Menu/honeyCookies.png',
                title: 'Печенье имбирное домашнее',
                price: '300 руб',
                description: ``
            },
            {
                id: '4',
                src: 'Photo_Menu/chocolateCake.png',
                title: 'Торт шоколадный',
                price: '150 руб',
                description: ``
            },
            {
                id: '5',
                src: 'Photo_Menu/creamCake.png',
                title: 'Торт кремовый с фруктами',
                price: '600 руб',
                description: ``
            },
            {
                id: '6',
                src: 'Photo_Menu/bigCake.png',
                title: 'Торт большой',
                price: '1100 руб',
                description: ``
            },
            {
                id: '7',
                src: "Photo_Menu/cake'hare'.png",
                title: 'Торт "Заяц"',
                price: '900 руб',
                description: ``
            },
            {
                id: '8',
                src: 'Photo_Menu/berryCake.png',
                title: 'Торт ягодно-шоколадный',
                price: '750 руб',
                description: ``
            },
        ]
    }
}
</script>

<style scoped>
.body {
    margin: 0;
    padding: 145px 0 123px 0;
    background-color: #333232;
}
/* ADD PHOTO */
.addProduct {
    margin-left: auto;
    margin-right: auto;
    max-width: 353px;
    padding: 10px 123px 30px 123px;
    background: #FFEBCD;
    border: 15px solid #D2B48C;
    border-radius: 24px;
}
.titleAdd {
    margin-top: 0;
    margin-bottom: 25px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;
    color: #333232;
}

/* ADD FILE */
.addFile {
    margin-bottom: 25px;
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
	text-align: center;
	border-radius: 16px;
	background-color: #948167;
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

.subtitle {
    margin-top: 0;
    margin-bottom: 0px;
    padding-bottom: 0px;
    /* padding-left: 30px; */
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}
.fill {
    margin-bottom: 25px;
    padding: 5px 13px 5px 30px;
    border-radius: 16px;
    border: 3px solid #998F8F;
    background: #D3D3D3;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 158%;
    color: #998F8F;
}
.button {
    text-align: center;
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

/* EDIT PRODUCT */
.titleEdit {
    margin-top: 60px;
    margin-bottom: 15px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 160%;
    color: #FFFFFF;
}
.editProductTable {
    max-width: 1280px;
    margin: auto;
    border-spacing: 0;
}
.editTableHead {
    background-color: #948167;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 160%;
    color: #333232;
}
.editTableHead th {
    text-align: center;
    padding: 10px;
    border: 3px solid #FFEBCD;
}
.editTableHead :first-child {
    border-radius: 16px 0 0 0;
}
.editTableHead :last-child {
    border-radius:0 16px 0 0;
}
.editTableBody tr td {
    border: 3px solid #FFEBCD;
}
.editTableBody tr:last-child td:first-child {
    border-radius: 0 0 0 16px;
}
.editTableBody tr:last-child td:last-child {
    border-radius: 0 0 16px 0;
}
.editTableBody td {
    padding: 25px;
}

.info {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 158%;
    color: #FFFFFF;
}
.photo img {
    width: 150px; 
    height: 145px
}
.productName {
    width: 280px;
}
.price {
    width: 70px;
}
.description {
    max-width: 390px;
    list-style: none;
}
.saveChanges {
    width: 120px;
}
.saveChanges p {
    width: 20px;
    height: 20px;
    margin: auto;
    padding: 12px;
    background: #D2B48C;
    border-radius: 25px;
    font-size: 40px;
    color: #333232
}
</style>