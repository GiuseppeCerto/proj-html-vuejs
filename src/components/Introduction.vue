<template>
    <div class="container introduction_sec">
        <div class="row">
            <div class="col-12 introduction_item">
                <p class="intro_text">INTRODUCTION VIDEO</p>
                <h2 class="title_section2">
                    <span class="title_1">
                        Adivisory
                    </span>
                    <span class="title_2">
                        Performance
                    </span>
                </h2>
                <p class="intro_parag">
                    Financial exsecutives need to review their strategies, operating models and capabilities so that their areas can generate sound information for better decision making.
                </p>
                <div class="intro_video">
                    <img src="../assets/images/video-1.jpg" alt="">
                    <font-awesome-icon class="play_icon" icon="fa-solid fa-play" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style lang="scss" >
    .introduction_sec{
        width: 900px;
        margin: 0 auto;
    }

    .introduction_item{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 120px 0 110px 0;
        gap: 25px;
    }

    .intro_text{
        color: rgba(5,130,131,255);
        font-size: 14px;
        font-weight: 600;
    }

    .title_section2{
        font-size: 45px;
        font-weight: 700;
    }

    .title_2{
        color: rgba(5,130,131,255);
        background-color: rgba(218,236,237,255);
        padding: 5px 10px;
        border-radius: 5px;
    }

    .intro_parag{
        color: rgba(5,130,131,255);
        font-size: 14px;
        text-align: center;
    }

    .intro_video{
        position: relative;
        margin-top: 25px;
    }

    .intro_video img{
        border-radius: 4px;
    }

    .play_icon{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 90px;
        filter: opacity(0.8);
    }
  
</style>
  