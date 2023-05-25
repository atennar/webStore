<template>
    <div class="produs">
        <img src="./image/fruit.png" alt="cant load" class="image-produs">
        <h1>{{title}}</h1>
        <h2>{{price}}</h2>
        <button class="btn-produs">buy</button>
    </div>
</template>

<script>
export default {
    props : ['title' , 'price']
}
</script>
<style >
.produs{
    text-align: center;
    border: 5px solid rgb(234, 110, 110);
    background-color: rgb(247, 185, 91);
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    color: aliceblue;
    width: 200px;
}

.image-produs{
    width: 128px;
}

.btn-produs{
    background-color: aliceblue;
    border: none;
    width: 100px;
    border-radius: 12px;
}
</style>