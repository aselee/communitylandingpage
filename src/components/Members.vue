<template>
  <div id="members"
    <ul>
      <li v-for="member in members" v-on:click="member.show = !member.show">
        <h2>{{ member.name }}</h2>
        <h3 v-show="member.show">{{ member.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return{
      members: [
        {name:'DevLee', speciality:"JavaScript", show:false},
        {name:'MattL019', speciality:"JavaScript", show:false},
        {name:'novajeeper', speciality:"JavaScript", show:false},
        {name:'rejam', speciality:"JavaScript", show:false},
        {name:'banhbaovy', speciality:"JavaScript", show:false}
      ]
    }
  }
}

</script>

<style scoped>
#members{
width: 100%;
max-width: 1200px;
margin: 40px auto;
padding: 0 20px;
box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>