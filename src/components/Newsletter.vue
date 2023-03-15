<template>
    <div class="newsletter_bg">
        <div class="newsletter_sec">
            <div class="row">
                <div class="col-6">
                    <div class="gray_text">
                        NEWSLETTER
                    </div>
                    <div class="newsletter_title_sec">
                        <h2 class="newsletter_title">
                            Know
                        </h2>
                        <h2 class="newsletter_title2">
                            First
                        </h2>
                    </div>
                    <p class="newsletter_parag">
                        Every week we publish content about what is best in business world.
                     </p>
                </div>
                <div class="col-6">
                    <input type="text" class="input_newsletter" placeholder="Name">
                    <input type="text" class="input_newsletter" placeholder="Email">

                    <div class="newsletter_button">
                        SUBSCRIBE
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style lang="scss" >

    .newsletter_bg{
        background-color: black;
    }

    .newsletter_sec{
        width: 900px;
        margin: 0 auto;
        padding-top: 110px;
        padding-bottom: 110px;
    }

    .newsletter_title_sec{
        display: flex;
    }

    .newsletter_title{
        background-color: rgba(14,39,45,255);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 45px;
        font-weight: 700;
        margin-top: 20px;
    }

    .newsletter_title2{
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 45px;
        font-weight: 700;
        margin-top: 20px;
    }

    .newsletter_parag{
        font-size: 14px;
        color: rgba(120,111,138,255);
        margin-top: 20px;
    }

    .input_newsletter{
        color: rgba(120,111,138,255);;
        height: 50px;
        width: 100%;
        background-color: rgba(29,29,35,255);
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-radius: 5px;
        margin-bottom: 19px;
    }

    .input_newsletter::placeholder{
        color: rgba(120,111,138,255);
    }

    .newsletter_button{
        padding: 8px 18px;
        background-color: rgba(5,130,131,255);
        border-radius: 3px;
        color: white;
        width: fit-content;
    }

  
</style>