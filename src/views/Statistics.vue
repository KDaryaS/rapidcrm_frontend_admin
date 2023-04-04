<template>
    <div class="userList_body">
        <p class="userList_titleTable">Зарегистированные пользователи</p>
        <div class="userList_table">
            <table class="userList_userTable">
                <thead class="userList_userTableHead">
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Email</th>
                        <th>Номер телефона</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody class="userList_userTableBody">
                    <tr class="userList_info" v-for="user in users" :key="user.id">
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'Statistics',
    data () {
        return {users: null}
    },
    methods: {
        getData () {
            this.axios.get('http://192.168.31.74:8082/api/users')
                .then((result) => {
                    this.users = result.data
                })
                .catch((err) => console.log(err))
        },
        deleteUser(id, firstName, lastName) {
            let confirmation = confirm(`Вы уверены, что хотите удалить пользователя по имени: ${firstName} ${lastName}?`)
            if (confirmation) {
                this.axios.delete(`http://192.168.31.74:8082/api/users/delete?id=${id}`)
                    .then(() => {
                        this.getData()
                    })
                    .catch((err) => console.log(err))
            } else {return}     
        }
    },
    mounted() {
        this.getData()
    }
}


// export default {
//     name: 'Statistics',
//     data () {
//         return {
//             requestURL: 'http://192.168.31.74:8082/api/users',
//             xhr: new XMLHttpRequest()
//         }
//     },
//     methods: {
//         sendRequest (method, url) {
//             return new Promise((resolve, reject) => {
//                 this.xhr.open(method, url)
//                 this.xhr.responseType='json'
//                 this.xhr.setRequestHeader('Content-Type', 'application/json')
//                 this.xhr.onload = () => {
//                     if(this.xhr.status>=400) {
//                         reject(this.xhr.response)
//                     } else {
//                         resolve(this.xhr.response)
//                     }
//                 }
//                 this.xhr.onerror = () => {
//                     reject(this.xhr.response)
//                 }
//                 this.xhr.send()
//             })
//         },
//         showUsers () {
//             this.sendRequest ('GET', this.requestURL)
//                 .then(info => {
//                     let userTableBody = document.querySelector('tbody');
//                     for(let user of info) {
//                         let row = document.createElement('tr');
//                         row.className = 'userList_info';
//                         let td_0 = document.createElement('td');
//                         td_0.innerHTML = user.firstName;
//                         let td_1 = document.createElement('td');
//                         td_1.innerHTML = user.lastName;
//                         let td_2 = document.createElement('td');
//                         td_2.innerHTML = user.email;
//                         let td_3 = document.createElement('td');
//                         td_3.innerHTML = user.phone;
//                         let td_4 = document.createElement('td');
//                         td_4.innerHTML = '/';
//                         };

//                         row.appendChild(td_0);
//                         row.appendChild(td_1);
//                         row.appendChild(td_2);
//                         row.appendChild(td_3);
//                         row.appendChild(td_4);
                        
//                         userTableBody.appendChild(row)
//                     }
//                 })
//                 .catch(err => console.log(err))
//         },
//     },
//     mounted() {
//         if (document.querySelectorAll('tr').length <= 1) {
//             this.showUsers ()
//         } else {
//             return
//         }
//     }
// }
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
</style>