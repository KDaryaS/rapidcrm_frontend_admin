<template>
    <div class="body">
        <div class="addProduct">
            <p class="title">Список разделов</p>
            <p class="subtitle">(нажмите дважды на раздел, чтобы удалить)</p>
            <input class="bigFill" type="text" size="30" maxlength="40" value="">
            <button class="bigPlus">+</button>
            <ul class="menuSections">
                <li class="menuSectionItem"  v-for="el in sideMenu">
                    <p>{{ el.section }}</p>
                    <input class="fill" type="text" size="15" maxlength="40" value="">
                    <button class="plus">+</button>
                    <ul>
                        <li v-for="sub in el.subsection" class="menuSubsection">{{ sub }}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideMenuChanges',
    data() {
        return {
            sideMenu: []
        }
    },
    created () {
        this.sideMenu = [
            {section: 'Салаты',},
            {section: 'Супы'},
            {section: 'Горячие блюда'},
            {section: 'Десерты'},
            {section: 'Напитки',
             subsection: [
                'Горячие напитки',
                'Прохладительные напитки',
                'Алкогольные напитки'
             ]},
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
.addProduct {
    margin-left: auto;
    margin-right: auto;
    max-width: 478px;
    padding: 10px 123px 10px 123px;
    background: #FFEBCD;
    border: 15px solid #D2B48C;
    border-radius: 24px;
}
.title {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;
    color:  #333232;
}
.subtitle {
    margin: 0 0 25px 0;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 160%;
    color:  #333232;
}
.bigFill {
    margin-bottom: 25px;
    padding: 2px 13px 2px 20px;
    border-radius: 16px;
    border: 3px solid #998F8F;
    background: #D3D3D3;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 158%;
    color: #998F8F;
}
.bigPlus {
    width: 35px;
    height: 35px;
    margin-left: 20px;
    background-color: #333232;
    border: none;
    border-radius: 25px;
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 600;
    line-height: 160%;
    color:  #FFFFFF;
}


.menuSections {
    margin: 0px;
    padding-left: 15px;
}
.menuSectionItem {
    margin-bottom: 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 160%;
    color:  #333232;
}
.menuSectionItem p{
    margin: 0 0 3px 0;
}
.menuSectionItem ul {
    margin-left: 10px;
    padding: 0;
}
.menuSubsection {
    margin-top: 10px;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 160%;
    color:  #333232;
}
.menuSubsection::before{
    content: "- ";
}
.fill {
    margin-left: 10px;
    padding: 2px 13px 2px 20px;
    border-radius: 16px;
    border: 1px solid #998F8F;
    background: #D3D3D3;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 158%;
    color: #998F8F;
}
.plus {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    background-color: #333232;
    border: none;
    border-radius: 25px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 160%;
    color:  #FFFFFF;
}
</style>