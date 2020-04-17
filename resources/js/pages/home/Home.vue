<template>
<div>
      <div id="landingPage">
          <p class="bigTitle">Pusat Kaos Sablon Berkualitas</p>
          <div class="dicount rounded">
              <p>Disc 30% off</p>
          </div>
    </div>
  <div class="container-fluid">

    <div class="container mt-4 mb-5">
         <h3>Top Products</h3>
        <hr/>
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
            <div class="card m-2">
                <img class="card-img-top" src="https://placekitten.com/300/250" alt="" width="239" height="200">
                <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium recusandae officiis, maxime nobis voluptatibus quasi alias neque eum fugit? Odio qui assumenda eos blanditiis veritatis eligendi ad sed pariatur accusantium.</p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
            <div class="card m-2">
                <img class="card-img-top" src="https://placekitten.com/300/250" alt="" width="239" height="200">
                <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium recusandae officiis, maxime nobis voluptatibus quasi alias neque eum fugit? Odio qui assumenda eos blanditiis veritatis eligendi ad sed pariatur accusantium.</p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
            <div class="card m-2">
                <img class="card-img-top" src="https://placekitten.com/300/250" alt="" width="239" height="200">
                <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium recusandae officiis, maxime nobis voluptatibus quasi alias neque eum fugit? Odio qui assumenda eos blanditiis veritatis eligendi ad sed pariatur accusantium.</p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
            <div class="card m-2">
                <img class="card-img-top" src="https://placekitten.com/300/250" alt="" width="239" height="200">
                <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium recusandae officiis, maxime nobis voluptatibus quasi alias neque eum fugit? Odio qui assumenda eos blanditiis veritatis eligendi ad sed pariatur accusantium.</p>
                </div>
            </div>
        </div>
    </div>

    </div>
  </div>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
#landingPage{
    background-image: url('/images/slide 3.png');
    height: 500px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.bigTitle{
    font-family:sans-serif;
    font-size: 2em;
    color:#fff;
    padding-top: 80px;
    padding-left: 30px;
    font-weight: bold;
}
.dicount{
    /* height: 200px; */
    width: 200px;
    background-color:#EFDCC1 ;
    font-size: 2em;
    color: #fff;
    text-align: center;
    vertical-align:middle;
    margin-left: 30px;
    margin-top: 200px;
    font-weight: bold;
    animation-name: biggerdics;
    animation-delay: 1s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function:ease-out;
}
@keyframes biggerdics {
   from {margin-left: 5%;font-size: 1em;}
  to {margin-left: 15%;font-size: 3em;width: 300px;}

}
</style>
