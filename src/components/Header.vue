<template>
    <header>
        <div class="contact_section">
            <div class="contact_conatiner">
                <div class="row">
                    <div class="col-6">
                        <font-awesome-icon class="contacts_icon" icon="fa-solid fa-clock" />
                        <span>Open Hours:Mon - Sat - 9.00 - 18.00</span>
                    </div>
                    <div class="col-6 header_contacts">
                        <div>
                            <font-awesome-icon class="contacts_icon" icon="fa-solid fa-phone" />
                            <span>+1 (305) 1234-5678</span>
                        </div>
                        <div>
                            <font-awesome-icon class="contacts_icon" icon="fa-solid fa-envelope" />
                            <span>hello@exeple.com</span>
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-brands fa-twitter" /> 
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header_section">
            <div class="header_container">
                <div class="row nav_section">
                    <div class="col-6">
                        <img class="header_logo" src="../assets/images/logo.svg" alt="">
                    </div>
                    <div class="col-6">
                        <ul class="nav">
                            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                            <li>
                                <font-awesome-icon icon="fa-regular fa-user" /></li>
                            <li class="header_button">GET IN TOUCH</li>
                        </ul>
                      </div>
                </div>
                <div class="title_container">
                    <div class="row">
                        <div class="col-12 title_section">
                            <h1>
                                Financial Risk
                            </h1>
                            <p>
                                The right outcomes depend on continuous rigor in goverance, models and processes across the finance function.
                            </p>
                            <div class="button_items">
                                <div class="header_button">
                                    GET IN TOUCH
                                </div>
                                <div class="header_button_trans">
                                    READ MORE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script>
    export default {
        data() {
            return {
            items: ["HOME", "ABOUT", "SERVICES", "TEAM", "BLOG"]
            };
        }
    };
</script>

  
<style lang="scss" scoped>

.contact_section{
    background-color: rgba(33,51,62,255);
    color: rgba(145,171,193,255);
    font-size: 12px;
    padding: 16px 0;
}

.contact_section *{
    cursor: pointer;
}
.contact_conatiner{
    width: 1140px;
    margin: 0 auto;
}

.contacts_icon{
    margin-right: 5px;
}

.header_section{
    position: relative;
}

.header_section::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0; left: 0;
    background-image: url('../assets/images/bg-2.jpg');
    background-size: cover;
    filter:brightness(0.6)
}

.header_container{
    width: 1100px;
    margin: 0 auto;
    color: white;
}

.nav_section{
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 210px;
    position: relative;
    z-index: 99;
}

.header_contacts{
    display: flex;
    justify-content: end;
    gap: 30px;
}


.header_logo{
    width: 130px;
    cursor: pointer;
}

.nav{
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    align-items: center;
}

.nav *{
    cursor: pointer;
}

.nav *:hover{
    color: rgb(14,125,127);
}

.header_button{
    padding: 8px 18px;
    background-color: rgba(5,130,131,255);
    border-radius: 3px;
    color: white !important;
}

.header_button:hover{
    background-color: #636767;
}

.title_container{
    width: 650px;
    margin: 0 auto;
    position: relative;
    z-index: 99;
}

.title_section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 250px;
}

.title_section h1{
    font-size: 60px;
    font-weight: 900;
    padding-bottom: 30px;
}

.title_section p{
    color: rgba(141,145,155,255);
    margin-bottom: 35px;
}

.button_items{
    display: flex;
    gap: 25px;
    cursor: pointer;
}

.header_button_trans{
    padding: 8px 18px;
    border: 2px solid rgba(37,87,93,255);
    border-radius: 3px;
    color: white;
}

.header_button_trans:hover{
    background-color: rgb(55, 200, 248);
}

</style>