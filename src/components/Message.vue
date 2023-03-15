<template>
    <div class="message_sec">
        <div class="row justify-content-between">
            <div class="col-8">
                <div class="gray_text">
                    SEND A MESSAGE
                </div>
                <div class="message_title_sec">
                    <h2 class="message_title">
                        Get in
                    </h2>
                    <h2 class="message_title2">
                        Touch
                    </h2>
                </div>
                <p class="message_parag">
                    We will respond to your message as soon as possible.
                </p>
                <div class="row input_sec">
                    <div class="col-6">
                        <input class="input_message_phone" type="text" placeholder="Name">
                        <input class="input_message" type="text" placeholder="Phone">
                    </div>
                    <div class="col-6 ">
                        <input class="input_message" type="text" placeholder="Email">
                        <input class="input_message" type="text" placeholder="More Info">
                        <font-awesome-icon class="info_icon" icon="fa-solid fa-chevron-down" />
                    </div>
                    <div class="col-12">
                        <textarea class="input_message2" type="text" placeholder="Message"></textarea>
                    </div>
                    <div class="message_button">
                        SEND
                    </div>
                </div>
            </div>
            <div class="col-3 message_contact_sec">
                <h4 class="message_contact_title">
                    Example Inc.
                </h4>
                <p class="message_contact_parag">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p class="message_contact_parag"> Veniam, aut nostrum laborum odio eos placeat porro.</p>

                <div class="contact_item">
                    <font-awesome-icon class="message_icon" icon="fa-solid fa-phone" />
                    <span>+1 (305) 1234-5678</span>
                </div>
                <div class="contact_item">
                    <font-awesome-icon class="message_icon" icon="fa-solid fa-envelope" />
                    <span>hello@exeple.com</span>
                </div>
                <div class="contact_item">
                    <font-awesome-icon class="message_icon" icon="fa-solid fa-location-dot" />
                    <span>Main Evenue, 987</span>
                </div>

                <div class="contact_button">
                    VIEW MAP
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style lang="scss" >

    .message_sec{
        width: 1200px;
        margin: 0 auto;
        margin-top: 110px;
        margin-bottom: 110px;
    }

    .message_title_sec{
        display: flex;
        margin-top: 20px;
    }

    .message_title{
        width: fit-content;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 45px;
        font-weight: 700;
        padding-left: 0;
    }

    .message_title2{
        background-color: rgba(218,236,237,255);
        color: rgba(5,130,131,255);
        width: fit-content;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 45px;
        font-weight: 700;
    }

    .message_parag{
        font-size: 14px;
        color: rgba(5,130,131,255);
        margin-top: 20px;
    }

    .input_sec{
        position: relative;
    }

    .input_message{
        color: rgba(156,162,167,255);
        height: 50px;
        width: 100%;
        background-color: rgba(236,236,236,255);
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-radius: 5px;
        margin-bottom: 19px;
        position: relative;
    }

    .input_message_phone{
        color: rgba(156,162,167,255);
        height: 50px;
        width: 100%;
        background-color: rgba(236,236,236,255);
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-radius: 5px;
        margin-bottom: 19px;
        background-image: url('../assets/images/image\ \(1\).png');
        background-repeat: no-repeat;
        background-position: 360px;
    }

    .input_message_phone::placeholder{
        color: rgba(156,162,167,255);
    }

    .input_message::placeholder{
        color: rgba(156,162,167,255);
    }

    .input_message2{
        color: rgba(156,162,167,255);
        height: 150px;
        width: 100%;
        background-color: rgba(236,236,236,255);
        justify-content: start;
        padding: 0 10px;
        border-radius: 5px;
        margin-bottom: 19px;
        padding-top: 10px;
        border: 0;
    }

    .input_message2::placeholder{
        top: 20px;
        color: rgba(156,162,167,255);
    }

    .info_icon{
        font-size: 15px;
        color: rgba(156,162,167,255);
        position: absolute;
        top: 87px;
        right: 23px;
        z-index: 99;
    }

    .message_button{
        padding: 8px 18px;
        background-color: rgba(5,130,131,255);
        border-radius: 3px;
        color: white;
        width: fit-content;
        margin-left: 12px;
        cursor: pointer;
    }

    .message_button:hover{
        background-color: #636767;
    }

    .message_contact_sec{
        display: flex;
        flex-direction: column;
        gap: 23px;
    }

    .message_contact_sec div{
        cursor: pointer;
    }

    .message_contact_title{
        font-weight: 600;
    }

    .message_contact_sec div:hover .message_icon{
        background-color: rgb(55, 200, 248);
    }

    .message_contact_parag{
        font-weight: 15px;
        font-weight: 400;
        color: rgba(156,162,167,255);
    }

    .contact_item{
        display: flex;
        gap: 9px;
        align-items: center;
        color: rgba(156,162,167,255);
    }

    .contact_item:hover{
        color: gray;
    }

    .message_icon{
        color: rgba(5,130,131,255);
        background-color: rgba(218,236,237,255);
        width: 13px;
        height: 13px;
        border-radius: 50%;
        padding: 8px 8px;
        cursor: pointer;
    }

    .contact_button{
        color: rgb(156, 162, 167);
        padding: 8px 18px;
        border: 1px solid rgb(156, 162, 167);
        border-radius: 3px;
        width: fit-content;
        margin-top: 10px;
    }

    .contact_button:hover{
        background-color: rgb(55, 200, 248);
        color: white;
    }
  
</style>
  