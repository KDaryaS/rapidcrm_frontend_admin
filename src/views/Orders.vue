<template>
    <div class="body">
        <p class="titleAdd">Добавить заказ</p>
        <table class="addOrder">
            <thead class="addTableHead">
                <tr>
                    <th>Имя Фамилия</th>
                    <th>Email</th>
                    <th>Номер телефона</th>
                    <th>Адрес</th>
                    <th>Заказ</th>
                    <th>Комментарии</th>
                    <th>Добавить заказ</th>
                </tr>
            </thead>
            <tbody class="addTableBody">
                <tr>
                    <td><textarea class="fill" cols="12" rows="2"></textarea></td>
                    <td><input class="fill" type="text" size="19" maxlength="50" value=""></td>
                    <td><input class="fill" type="tel" size="14" maxlength="30" value=""></td>
                    <td><textarea class="fill" cols="17" rows="2"></textarea></td>
                    <td><textarea class="fill" cols="23" rows="3"></textarea></td>
                    <td><textarea class="fill" cols="16" rows="3"></textarea></td>
                    <td><div class="add">Добавить</div></td>
                </tr>
            </tbody>
        </table>
        <p class="titleTable">Таблица заказов</p>
        <p class="subtitle">(при двойном клике можно отредактировать заказ)</p>
        <div class="table">
            <table class="orderTable">
                <thead class="tableTableHead">
                    <tr>
                        <th>Имя Фамилия</th>
                        <th>Email</th>
                        <th>Номер телефона</th>
                        <th>Адрес</th>
                        <th>Заказ</th>
                        <th>Комментарии</th>
                        <th>Статус заказа</th>
                    </tr>
                </thead>
                <tbody class="tableTableBody">
                    <tr v-for="client in information" :key="client.id" class="info">
                        <td class="name"> 
                            <input  v-if="client.edit"
                                v-model="client.name"
                                @blur="client.edit = false; $emit('update')"
                                @keyup.enter="client.edit=false; $emit('update')"
                                v-focus
                            >
                            <div v-else>
                                <p @dblclick="client.edit = true;"> {{client.name}} </p>
                            </div>
                        </td>


                        <td class="email">
                            <input  v-if="client.edit"
                                v-model="client.email"
                                @blur="client.edit = false; $emit('update')"
                                @keyup.enter="client.edit=false; $emit('update')"
                                v-focus
                            >
                            <div v-else>
                                <p @dblclick="client.edit = true;"> {{ client.email }} </p>
                            </div>
                        </td>

                        <td class="telephone">
                            <input  v-if="client.edit"
                                v-model="client.telephone"
                                @blur="client.edit = false; $emit('update')"
                                @keyup.enter="client.edit=false; $emit('update')"
                                v-focus
                            >
                            <div v-else>
                                <p @dblclick="client.edit = true;"> {{ client.telephone }} </p>
                            </div>
                        </td>

                        <td class="address">
                            <input  v-if="client.edit"
                                v-model="client.address"
                                @blur="client.edit = false; $emit('update')"
                                @keyup.enter="client.edit=false; $emit('update')"
                                v-focus
                            >
                            <div v-else>
                                <p @dblclick="client.edit = true;"> {{ client.address }} </p>
                            </div>
                        </td>

                        <td class="order">
                            <ul v-for="ord in client.order">
                                <li> 
                                    <input  v-if="client.edit"
                                        v-model="client.order"
                                        @blur="client.edit = false; $emit('update')"
                                        @keyup.enter="client.edit=false; $emit('update')"
                                        v-focus
                                    >
                                    <div v-else>
                                        <p @dblclick="client.edit = true;"> {{ ord }} </p>
                                    </div>
                                </li>
                            </ul>
                        </td>

                        <td class="comments">
                            <input  v-if="client.edit"
                                v-model="client.comments"
                                @blur="client.edit = false; $emit('update')"
                                @keyup.enter="client.edit=false; $emit('update')"
                                v-focus
                            >
                            <div v-else>
                                <p @dblclick="client.edit = true;"> {{ client.comments }} </p>
                            </div>
                        </td>

                        <td class="status">
                            <div class="paint">
                                <ul>
                                    <li @click="OrderStatus(client.id, 0)" class="submittedForProcessing active">
                                        Передан на обработку </li>
                                    <li @click="OrderStatus(client.id, 1)" class="processed">Обрабатывается</li>
                                    <li @click="OrderStatus(client.id, 2)" class="delivered">Доставляется</li>
                                    <li @click="OrderStatus(client.id, 3)" class="ready">Готов к получению</li>
                                    <li @click="OrderStatus(client.id, 4)" class="failedToContact">Не удалось связаться</li>
                                    <li @click="OrderStatus(client.id, 5)" class="cancelled">Заказ отменен</li>
                                    <li @click="OrderStatus(client.id, 6)" class="completed">Заказ выполнен</li>
                                </ul>
                                <img class="close" src="../assets/Close.png">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Orders',
    data () {
        return {
            information: [],
            editedClient: null,
        }
    },
    methods: {
        OrderStatus (id, ik) {
            let liActiveNode = document.querySelectorAll('.paint')[id].querySelector('li.active')
            document.querySelectorAll('.paint')[id].classList.toggle('paint--visible')
            liActiveNode.classList.remove('active')
            if (document.querySelectorAll('.paint')[id].querySelectorAll('li')[ik]) {
                document.querySelectorAll('.paint')[id].querySelectorAll('li')[ik].classList.add('active')
            }
        },
        editTodo (client) {
            this.editedClient = client
        }
    },
    directives: {
        focus: {
            inserted (el) {
                el.focus()
            }
        }
    },
    created () {
        this.information = [
            {
                id: 0,
                name: 'Абвгд Абвгдков',
                email: 'Abcde@port.com',
                telephone: '7(012)3456789',
                address: 'г. Поач, ул. Высокая, д.3, подъезд 1, кв. 9',
                order: ['Торт ягодно-шоколадный - 1 шт'],
                comments: ''
            },
            {
                id: 1,
                name: 'Иимя Фамилова',
                email: 'Famil9735@result.ru',
                telephone: '7(012)5668733',
                address: 'г. Поач, ул. Поачиковая, д. 10, подъезд 4, кв. 48',
                order: ['Салат "Летний" - 2 шт', 'Паста "Мясная" - 2шт', 'Молочный коктейль "Клубника" - 2шт'],
                comments: 'В одну порцию салата желательно не добавлять помидоры'
            },
            {
                id: 2,
                name: 'Грустик Радостный',
                email: 'RadGrust101277@port.com',
                telephone: '7(012)9345510',
                address: 'г. Поач, ул. Озерная, д. 7, подъезд 3, кв. 34',
                order: ['Печенье имбирное домашнее - 1шт', 'Торт шоколадный - 3шт'],
                comments: 'Привезти заказ к 18 часам'
            },
            {
                id: 3,
                name: '',
                email: '',
                telephone: '',
                address: '',
                order: ['Кофе латте - 1шт', 'Горячий шоколад - 2 шт'],
                comments: ''
            },
            {
                id: 4,
                name: 'Тырыпыр Торопыгов',
                email: 'Torop633632@result.ru',
                telephone: '7(012)8475324',
                address: 'г. Поач, ул. Подгорная, д.8, подъезд 4, кв. 41',
                order: ['Салат "Фирменный" - 3шт', 'Салат "Рыба-мясо" - 4шт', 'Жульен - 4шт', 'Картошка "деревенская" - 4шт'],
                comments: ''
            },
            {
                id: 5,
                name: 'Listik Osenniy',
                email: 'ListikOsenniy@result.ru',
                telephone: '7(012)9876543',
                address: 'г. Поач, ул. Высокая, д.11, подъезд 2, кв. 14',
                order: ['Торт большой - 1шт', 'Печенье мягкое медовое - 3шт'],
                comments: ''
            },
            {
                id: 6,
                name: '',
                email: '',
                telephone: '',
                address: '',
                order: ['Салат "Летний" - 1шт', 'Чай "Ягодный" - 1 шт'],
                comments: ''
            },
            {
                id: 7,
                name: '',
                email: '',
                telephone: '',
                address: '',
                order: ['Кофе "Капучино" - 2шт'],
                comments: 'Побольше сахара'
            },
            {
                id: 8,
                name: 'Прыжок Сугробиков',
                email: 'Sygrobikov1931@port.com',
                telephone: '7(012)3332211',
                address: 'г. Поач, ул. Поачиковая, д.1, подъезд 1, кв. 3',
                order: ['Паста "Мясная" - 5шт'],
                comments: ''
            },
            {
                id: 9,
                name: '',
                email: '',
                telephone: '',
                address: '',
                order: ['Суп "Борщ" -1шт', 'Салат "Какаду" - 1шт', 'Жульен - 1шт'],
                comments: ''
            },
            {
                id: 10,
                name: 'Прыжок Сугробиков',
                email: 'Sygrobikov1931@port.com',
                telephone: '7(012)3332211',
                address: 'г. Поач, ул. Поачиковая, д.1, подъезд 1, кв. 3',
                order: ['Паста "Мясная" - 5шт'],
                comments: ''
            },
            {
                id: 11,
                name: 'Прыжок Сугробиков',
                email: 'Sygrobikov1931@port.com',
                telephone: '7(012)3332211',
                address: 'г. Поач, ул. Поачиковая, д.1, подъезд 1, кв. 3',
                order: ['Паста "Мясная" - 5шт'],
                comments: ''
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
/* ADD ORDER */
.titleAdd {
    margin: 0 0 15px 0;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 160%;
    color: #FFFFFF;
}
.addOrder {
    max-width: 1280px;
    margin: 0 auto 40px auto;
    border-spacing: 0;
}
.addTableHead {
    background-color: #FFEBCD;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 160%;
    color: #333232;
}
.addTableHead th {
    text-align: center;
    padding: 10px;
    border: 3px solid #D2B48C;
}
.addTableHead :first-child {
    border-radius: 16px 0 0 0;
}
.addTableHead :last-child {
    border-radius:0 16px 0 0;
}
.addTableBody tr td {
    border: 3px solid #D2B48C;
}
.addTableBody tr:last-child td:first-child {
    border-radius: 0 0 0 16px;
}
.addTableBody tr:last-child td:last-child {
    border-radius: 0 0 16px 0;
}
.addTableBody td {
    padding: 25px 5px 25px 5px;
}

.fill {
    padding: 4px 5px 4px 5px;
    border-radius: 16px;
    border: 2px solid #998F8F;
    background: #D3D3D3;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 158%;
    color: #998F8F;
}
.add {
    padding: 9px 23px 9px 23px;
    background-color: #CAED9E;
    border: 3px solid #9CC870;
    border-radius: 16px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 158%;
    color: #333232;
}

/* ORDER TABLE */
.titleTable {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 160%;
    color: #FFFFFF;
}
.subtitle {
    margin: 0 0 5px 0;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 160%;
    color: #FFFFFF;
}
.table {
    padding: 0 0 123px 0;
}
.orderTable {
    max-width: 1280px;
    margin: auto;
    border-spacing: 0;
}
.tableTableHead {
    background-color: #948167;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 160%;
    color: #333232;
}
.tableTableHead th {
    text-align: center;
    padding: 10px;
    border: 3px solid #FFEBCD;
}
.tableTableHead :first-child {
    border-radius: 16px 0 0 0;
}
.tableTableHead :last-child {
    border-radius:0 16px 0 0;
}
.tableTableBody tr td {
    border: 3px solid #FFEBCD;
}
.tableTableBody tr:last-child td:first-child {
    border-radius: 0 0 0 16px;
}
.tableTableBody tr:last-child td:last-child {
    border-radius: 0 0 16px 0;
}
.tableTableBody td {
    padding: 25px 10px 25px 10px;
}

.info {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 158%;
    color: #FFFFFF;
}
.name {
    width: 127.52px;
}
.email {
    width: 187.67px;
}
.telephone {
    width: 155.44px;
}
.address {
    width: 169.44px;
}
.order {
    width: 219.79px;
}
.order ul {
    margin: 0;
    padding-left: 20px;
}
.comments {
    width: 153.77px;
}
.status {
    width: 140.7px;
}

/* STATUS */
.paint {
  display: flex;
  justify-content: center;
}

.paint ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}

.paint li {
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 158%;
    color: #FFFFFF;
}

.paint li.active {
  order: -1;
}

.paint li.active {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 50px;
    border-radius: 16px;
    color: #333232;
}
.submittedForProcessing.active {
    background: #FDDB61;
    border: 2px solid #A78408;
}
.processed.active {
    background: #FFA877;
    border: 2px solid #DF6A28;
}
.delivered.active {
    background: #D4F37C;
    border: 2px solid #9BAB3A;
}
.ready.active {
    background: #6EF7AD;
    border: 2px solid #1B9F70;
}
.failedToContact.active {
    background: #B5879A;
    border: 2px solid #893B57;
}
.cancelled.active {   
    background: #EC8B8B;
    border: 2px solid #E95050;
}
.completed.active {
    background: #72C575;
    border: 2px solid #297B49;
}

.paint li:not(.active) {
  padding-top: 5px;
  display: none;
}

.paint--visible li {
  display: list-item !important;
}
.close {
    width: 14px;
    height: 14px;
    padding-left: 5px;
}


@media (max-width:1399.98px) {
    /* ADD ORDER */
    .titleAdd {
        font-size: 16px;
    }
    .addOrder {
        max-width: 990px;
    }
    .addTableHead {
        font-size: 14px;
    }
    .addTableHead th {
        padding: 8px;
    }
    .addTableBody td {
        padding: 20px 2px;
    }
    .fill {
        font-size: 10px;
    }
    .add {
        padding: 5px 10px;
        font-size: 10px;
    }

    /* ORDER TABLE */
    .titleTable {
        font-size: 16px;
    }
    .subtitle {
        font-size: 12px;
    }
    .orderTable {
        max-width: 990px;
    }
    .tableTableHead {
        font-size: 14px;
    }
    .tableTableHead th {
        padding: 8px;
    }
    .tableTableBody td {
        padding: 20px 2px;
    }

    .info {
        font-size: 12px;
    }
    /* STATUS */
    .paint li {
        font-size: 12px;
    }
    .paint li.active {
        width: 110px;
        height: 40px;
    }
    .close {
        width: 12px;
        height: 12px;
    }
}

@media (max-width: 899.98px) {
    /* ADD ORDER */
    .titleAdd {
        margin: 0 0 10px 0;
        font-size: 14px;
    }
    .addOrder {
        max-width: 600px;
        margin: 0 auto 30px auto;
    }
    .addTableHead {
        font-size: 10px;
        font-weight: 400;
        text-transform: capitalize;
    }
    .addTableHead th {
        padding: 2px;
        border: 1px solid #D2B48C;
    }
    .addTableBody tr td {
        border: 1px solid #D2B48C;
    }
    .addTableBody td {
        padding: 10px 1px;
    }
    .fill {
        padding: 1px;
        border-radius: 12px;
        border: 1px solid #998F8F;
        font-size: 8px;
        font-weight: 400;
    }
    .add {
        padding: 1px;
        border: 1px solid #9CC870;
        font-size: 8px;
        font-weight: 400;
    }

    /* ORDER TABLE */
    .titleTable {
        font-size: 14px;
    }
    .subtitle {
        font-size: 10px;
    }
    .orderTable {
        max-width: 600px;
    }
    .tableTableHead {
        font-size: 10px;
        font-weight: 400;
        text-transform: capitalize;
    }
    .tableTableHead th {
        padding: 2px;
        border: 1px solid #FFEBCD;
    }
    .tableTableBody tr td {
        border: 1px solid #FFEBCD;
    }
    .tableTableBody td {
        padding: 10px 1px;
    }

    .info {
        font-size: 8px;
    }

    /* STATUS */
    .paint li {
        font-size: 8px;
        font-weight: 400;
    }
    .paint li.active {
        width: 80px;
        height: 30px;
        border-radius: 12px;
    }
    .close {
        width: 10px;
        height: 10px;
        padding-left: 3px;
    }
}
</style>