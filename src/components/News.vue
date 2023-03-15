<template>
    <div class="news_bg">
        <div class="news_sec">
            <div class="row justify-content-between news_header_sec">
                <div class="col-6">
                    <div class="gray_text">
                            OUR EDITORIAL CONTENT
                    </div>
                    <div class="news_title_sec">
                        <h2 class="news_title">
                            Latest
                        </h2>
                        <h2 class="news_title2">
                            News
                        </h2>
                    </div>
                    <p class="news_parag">
                       Every week we publish content about what is best in business world.
                    </p>
                </div>
                <div class="col-2 news_button_sec">
                    <div class="news_button">
                        SEE ALL
                    </div>
                </div>
            </div>

            <div class="news_card_sec">
                <div class="news_card">
                    <img src="../assets/images/news-1.jpg" alt="#">
                    <p class="card_parag">Increasing creativity is possible for everyone</p>
                </div>
                <div class="news_card">
                    <img src="../assets/images/news-2.jpg" alt="#">
                    <p class="card_parag">Because market reseach is the part of he business plan</p>
                </div>
                <div class="news_card">
                    <img src="../assets/images/news-3.jpg" alt="#">
                    <p class="card_parag">Working from home is now a trend</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style lang="scss" >

    .news_bg{
        background-color: rgba(238,244,237,255);
        padding-top: 110px;
    }

    .news_sec{
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 110px;
    }

    .news_header_sec{
        padding-bottom: 38px;
    }

    .news_title_sec{
        display: flex;
        margin-top: 20px;
    }

    .news_title{
        width: fit-content;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 45px;
        font-weight: 700;
        padding-left: 0;
    }
    
    .news_title2{
        background-color: rgba(218,236,237,255);
        color: rgba(5,130,131,255);
        width: fit-content;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 45px;
        font-weight: 700;
    }

    .news_parag{
        font-size: 14px;
        color: rgba(5,130,131,255);
        margin-top: 20px;
    }

    .news_button_sec{
        display: flex;
        justify-content: end;
        align-self: self-end;
        margin-bottom: 16px;
    }

    .news_button{
        padding: 8px 18px;
        background-color: rgba(5,130,131,255);
        border-radius: 3px;
        color: white;
        width: fit-content;
    }

    .news_card_sec{
        display: flex;
        justify-content: space-between;
    }

    .news_card{
        width: 32%;
        position: relative;
    }

    .news_card img{
        filter: brightness(0.5);
        border-radius: 8px;
    }

    .card_parag{
        font-size: 26px;
        color: white;
        font-weight: 600;
        text-align: center;
        position: absolute;
        margin: 0;
        bottom: 30px;
        padding: 0 30px 0 30px;
    }
  
</style>
  