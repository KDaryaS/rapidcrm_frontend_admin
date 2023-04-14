<template>
    <div class="userList_body">
        <p class="userList_titleTable">Зарегистированные пользователи</p>
        <div class="userList_table">
            <table class="userList_userTable">
                <thead class="userList_userTableHead">
                    <tr>
                        <th @click="sortByName">
                            Имя
                            <i class="sorting">#</i>
                        </th>
                        <th @click="sortBySurname">
                            Фамилия
                            <i class="sorting">#</i></th>
                        <th @click="sortByEmail">
                            Email
                            <i class="sorting">#</i>
                        </th>
                        <th @click="sortByPhone">
                            Номер телефона
                            <i class="sorting">#</i>
                        </th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody class="userList_userTableBody">
                    <tr class="userList_info" v-for="user in paginatedUsers" :key="user.id">
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td>
                            <button @click="deleteUser(user.id, user.firstName, user.lastName)">Удалить</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination">
                <div class="page" 
                    v-for="page in pages" 
                    :key="page" 
                    @click="pageClick(page)"
                    :class="{'page_selected': page === pageNumber}">
                    {{ page }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Statistics',
    data () {
        return {
            users: null,
            usersPerPages: 5,
            pageNumber: 1,
        }
    },
    computed: {
        pages() {
            return Math.ceil(this.$store.getters.USERS.length / 5)
        },
        paginatedUsers () {
            let from = (this.pageNumber - 1) * this.usersPerPages;
            let to = from + this.usersPerPages;
            return (this.$store.getters.USERS.slice(from, to))
        },
    },
    methods: {
        // getData () {
        //     this.axios.get('http://192.168.31.74:8082/api/users')
        //         .then((result) => {
        //             this.users = result.data
        //         })
        //         .catch((err) => console.log(err))
        // },
        deleteUser(id, firstName, lastName) {
            let confirmation = confirm(`Вы уверены, что хотите удалить пользователя по имени: ${firstName} ${lastName}?`)
            if (confirmation) {
                this.axios.delete(`http://192.168.31.74:8082/api/users/delete?id=${id}`)
                    .then(() => {
                        // this.getData()
                        this.$store.dispatch('GET_USERS_FROM_API')
                    })
                    .catch((err) => console.log(err))
            } else {return}     
        },
        pageClick (page) {
            this.pageNumber = page
        },
        sortByName() {
            this.$store.getters.USERS.sort((a, b) => a.firstName.localeCompare(b.firstName))
        },
        sortBySurname() {
            this.$store.getters.USERS.sort((a, b) => a.lastName.localeCompare(b.lastName))
        },
        sortByEmail() {
            this.$store.getters.USERS.sort((a, b) => a.email.localeCompare(b.email))
        },
        sortByPhone() {
            this.$store.getters.USERS.sort((a, b) => a.phone - b.phone)
        }
    },
    // mounted() {
    //     this.getData()
    // }
    created() {
        this.$store.dispatch('GET_USERS_FROM_API')
    }
}
</script>

<style scoped> 
.userList_body {
    margin: 0;
    padding-top: 145px;
    padding-left: 0;
    padding-right: 0;
    background-color: #333232;
}
.userList_titleTable {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 160%;
    color: #FFFFFF;
}
.userList_table {
    padding: 0 0 123px 0;
}
.userList_userTable {
    max-width: 1280px;
    margin: auto;
    border-spacing: 0;
}
.userList_userTableHead {
    background-color: #948167;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 160%;
    color: #333232;
}
.userList_userTableHead th {
    text-align: center;
    padding: 10px;
    border: 3px solid #FFEBCD;
}
.userList_userTableHead :first-child {
    border-radius: 16px 0 0 0;
}
.userList_userTableHead :last-child {
    border-radius:0 16px 0 0;
}
.userList_userTableBody tr td {
    border: 3px solid #FFEBCD;
}
.userList_userTableBody tr:last-child td:first-child {
    border-radius: 0 0 0 16px;
}
.userList_userTableBody tr:last-child td:last-child {
    border-radius: 0 0 16px 0;
}
.userList_userTableBody td {
    padding: 25px 10px 25px 10px;
}
.userList_info {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 158%;
    color: #FFFFFF;
}

.pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-top: 15px;
    margin-right: 380px;
}
.page  {
    padding-right: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: 25px;
    font-weight: 600;
    line-height: 158%;
    color: #FFEBCD;
    cursor: pointer;
}
.page_selected {
    color: #948167;
}
</style>